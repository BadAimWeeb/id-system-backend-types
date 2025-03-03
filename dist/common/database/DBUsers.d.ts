export declare const DBUsers: import("mongodb").Collection<{
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
    };
    userLanguage: string;
    createdAt: number;
    updatedAt: number;
}>;
