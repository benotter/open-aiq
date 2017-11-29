import * as lib from './common';

export interface OpenAIQ_Options
{
    [key : string ] : string | boolean | number | any;
}

export class OpenAIQ
{
    public get opts() : OpenAIQ_Options { return this.c_opts as OpenAIQ_Options; };
    private c_opts : any;

    public hubs : lib.Hub[] = [];

    public devices : { 
        favorites : { [name: string]: lib.Device },
        types: {[deviceType: string]: Map<string, lib.Device>} 
    } = { 
        favorites: {}, 
        types: {} 
    };

    constructor(private _opts : OpenAIQ_Options)
    {
        this.c_opts = Object.freeze(_opts);
    }

    public addDevices(dev : lib.Device | lib.Device[])
    {
        if(!(dev instanceof lib.Device))
            for(let device of dev)
                this.addDevices(dev);
        else
        {
            if(!this.devices.types[dev.device_type])
                this.devices.types[dev.device_type] = new Map<string, lib.Device>();
            
            let devMap = this.devices.types[dev.device_type];

            if(!devMap.has(dev.unique_id))
                devMap.set(dev.unique_id, dev);
        }
    }
}

export class OpenAIQError extends Error 
{
    constructor(mess: string, ...extra)
    {
        super(mess, ...extra);
    }
}