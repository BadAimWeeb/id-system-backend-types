export declare const DBOAuth2AccessTokens: import("mongodb").Collection<{
    version: number;
    token: string;
    requestedBy: string;
    toUUID: string;
    scopes: string[];
    createdAt: number;
    expiresAt: number;
    extraData?: any;
}>;
