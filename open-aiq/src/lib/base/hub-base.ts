import * as lib from '../common';

export interface HubCreds 
{
    [key : string] : any;
}

export abstract class Hub
{
    public abstract hub_name : string;

    public devices : { [deviceUniqeId: string] : lib.Device } = Object.create(null);

    constructor(
        public ai : lib.OpenAIQ
    )
    {
        
    }

    public abstract async auth(authCode : string) : Promise<HubCreds>;
    public abstract async reAuth(creds : HubCreds) : Promise<HubCreds>;

    public abstract async getDevices(creds: HubCreds) : Promise<lib.Device | lib.Device[]>;

    public abstract async poll(creds: HubCreds) : Promise<any>;
}