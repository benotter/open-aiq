import * as aiq from '@otter-co/open-aiq';

export default class ExampleDevice extends aiq.Device 
{
    constructor(ai : aiq.OpenAIQ, hub : aiq.Hub)
    {
        super(ai, hub);
    }

    public async setup(rawObj : any)
    {
        
    }

    public async getQuery(query) : Promise<aiq.HubCreds>
    {
        return {};
    }

    public async setQuery(query) : Promise<aiq.HubCreds>
    {
        return {};
    }
} 