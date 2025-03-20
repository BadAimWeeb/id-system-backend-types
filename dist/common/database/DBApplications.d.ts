import { JWK } from "jose";
export declare const DBApplications: import("mongodb").Collection<{
    uuid: string;
    name: string;
    avatar?: {
        type: "kona";
        uuid: string;
        url: string;
        revokationKey: string;
    } | {
        type: "gravatar";
        email: string;
    } | {
        type: "url";
        url: string;
    };
    description: string;
    ownerUUID: string;
    tokenSignAlgo?: string;
    userInfoSignAlgo?: string;
    userInfoEncryptionAlgo?: string;
    userInfoEncryptionEnc?: string;
    userInfoEncryptionKey?: JWK;
    idTokenSignAlgo?: string;
    idTokenEncryptionAlgo?: string;
    idTokenEncryptionEnc?: string;
    idTokenEncryptionKey?: JWK;
    verified?: boolean;
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
