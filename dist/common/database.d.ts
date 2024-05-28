import { Collection, WithId } from "mongodb";
export type DatabaseReturnType<T extends Collection<any>> = T extends Collection<infer U> ? WithId<U> : never;
export declare const DBUsers: Collection<{
    uuid: string;
    firstName: string;
    lastName: string;
    nameOrder: "first-last" | "last-first";
    isNamePublic: boolean;
    username: string;
    passwordHash: string;
    passwordMode: "bcrypt" | "yubiotp" | "passkeys" | "social-only";
    passkeys: {
        displayName: string;
        credentialID: string;
        publicKey: string;
        createdAt: number;
    }[];
    mfa: ({
        type: "totp";
        secret: string;
    } | {
        type: "yubiotp";
        identityHex: string;
    } | {
        type: "u2f";
        credentialID: string;
        publicKey: string;
    } | {
        type: "webauthn";
        credentialID: string;
        publicKey: string;
    })[];
    emails: {
        address: string;
        isVerified: boolean;
        isPublic: boolean;
    }[];
    phones: {
        number: string;
        isVerified: boolean;
        isPublic: boolean;
    }[];
    externalLink: (({
        type: "discord";
        cachedUsername: string;
    } | {
        type: "google";
        cachedEmail: string;
        cachedFirstName: string;
        cachedLastName: string;
    } | {
        type: "github";
        cachedUsername: string;
    }) & {
        userID: string;
        accessToken?: string;
        refreshToken?: string;
        lastCached: number;
    })[];
    pgp: {
        name: string;
        publicKey: string;
        boundTo: string[];
        stripUserID: boolean;
    }[];
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
    } | undefined;
    userLanguage: string;
    createdAt: number;
    updatedAt: number;
}>;
export declare const DBUserAccessTokens: Collection<{
    version: number;
    token: string;
    toUUID: string;
    createdAt: number;
    expiresAt: number;
    nextPointer?: string | undefined;
    extraData?: any | {
        userAgent: string;
        ip: string;
        secHeader: Record<string, string>;
    };
}>;
export declare const DBOAuth2RefreshTokens: Collection<{
    version: number;
    token: string;
    pointerAccessToken?: string | undefined;
    requestedBy: string;
    toUUID: string;
    scopes: string[];
    createdAt: number;
    expiresAt: number;
    extraData?: any;
}>;
export declare const DBOAuth2AccessTokens: Collection<{
    version: number;
    token: string;
    requestedBy: string;
    toUUID: string;
    scopes: string[];
    createdAt: number;
    expiresAt: number;
    extraData?: any;
}>;
export declare const DBOAuth2AuthorizationCodes: Collection<{
    version: number;
    code: string;
    requestedBy: string;
    toUUID: string;
    scopes: string[];
    redirectURI: string;
    createdAt: number;
    expiresAt: number;
    extraData?: any;
}>;
export declare const DBApplications: Collection<{
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
export declare const DBVerify: Collection<{
    type: "email" | "signal" | "recovery";
    userUUID: string;
    key: string;
    hiddenKey?: string | undefined;
    data: string;
    createdAt: number;
    expiresAt: number;
}>;
