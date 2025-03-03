export declare const DBOAuth2RefreshTokens: import("mongodb").Collection<{
    version: number;
    token: string;
    pointerAccessToken?: string;
    requestedBy: string;
    toUUID: string;
    scopes: string[];
    createdAt: number;
    expiresAt: number;
    extraData?: any;
}>;
