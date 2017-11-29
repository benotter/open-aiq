import * as lib from '../common';

export interface DeviceQuery 
{
    type : string;
    query : any;
}

export interface DeviceStatus
{
    status: string | number | boolean;
    info?: any;
}

export abstract class Device
{
    public device_type : string = "Device BluePrint";

    public unique_id : string | any;
    public common_name : string | any;

    constructor(
        public ai : lib.OpenAIQ, 
        public hub : lib.Hub
    )
    {

    }

    public abstract async setup(rawObj : any);

    public abstract async getQuery(query : DeviceQuery) : Promise<any>;
    public abstract async setQuery(query : DeviceQuery) : Promise<any>;

    public abstract async poll() : Promise<DeviceStatus>;
}