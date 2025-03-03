export declare const DBApplications: import("mongodb").Collection<{
    uuid: string;
    name: string;
    description: string;
    ownerUUID: string;
    secret: string;
    createdAt: number;
    updatedAt: number;
    /**
     * 1: deprecated T1
     * 2: OAuth2
     */
    tier: number;
    extraData?: any;
    allowedReturnURLs: string[];
}>;
