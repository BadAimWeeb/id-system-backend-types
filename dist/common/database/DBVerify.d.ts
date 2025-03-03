export declare const DBVerify: import("mongodb").Collection<{
    type: "email" | "signal" | "recovery";
    userUUID: string;
    key: string;
    hiddenKey?: string;
    data: string;
    createdAt: number;
    expiresAt: number;
}>;
