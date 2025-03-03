export declare const DBUserAccessTokens: import("mongodb").Collection<{
    version: number;
    token: string;
    toUUID: string;
    createdAt: number;
    expiresAt: number;
    nextPointer?: string;
    extraData?: any | {
        userAgent: string;
        ip: string;
        secHeader: Record<string, string>;
    };
}>;
