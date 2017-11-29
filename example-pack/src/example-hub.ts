import * as aiq from '@otter-co/open-aiq';

import ExampleDevice from './devices/example-device';

export default class ExampleHub extends aiq.Hub 
{
    public hub_name = "Example Hub";

    constructor(ai)
    {
        super(ai);
    }

    public async auth(authCode : string) : Promise<aiq.HubCreds>
    {
        return {};
    }

    public async reAuth(creds : aiq.HubCreds) : Promise<aiq.HubCreds>
    {
        return {};
    }
}