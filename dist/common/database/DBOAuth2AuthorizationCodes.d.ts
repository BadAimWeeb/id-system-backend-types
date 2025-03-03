export declare const DBOAuth2AuthorizationCodes: import("mongodb").Collection<{
    version: number;
    code: string;
    requestedBy: string;
    toUUID: string;
    scopes: string[];
    redirectURI: string;
    nonce?: string;
    createdAt: number;
    expiresAt: number;
    extraData?: any;
}>;
