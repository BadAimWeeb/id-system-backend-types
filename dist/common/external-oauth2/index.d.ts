export declare const SUPPORTED_PROVIDERS: readonly ["github", "google", "discord"];
export interface ProviderInitialResponse {
    accessToken: string;
    scope: string[];
    refreshToken?: string;
}
export interface ProviderResponse {
    userID: string;
    rawData?: any;
    usernameHint?: string;
    emailHint?: string;
    emailVerified?: boolean;
    firstNameHint?: string;
    lastNameHint?: string;
    phoneE164Hint?: string;
    avatarHint?: string;
}
export declare function resolveProviderAuthCode(provider: string, code: string): Promise<ProviderInitialResponse>;
export declare function resolveProviderUserData(provider: string, token: string): Promise<ProviderResponse>;
export declare function refreshProviderToken(provider: string, refresh: string): Promise<ProviderInitialResponse>;
export declare function convertDatabaseStorage(provider: string, data: ProviderResponse): {
    type: "github";
    userID: string;
    cachedUsername: string;
} | {
    type: "discord";
    userID: string;
    cachedUsername: string;
} | {
    type: "google";
    userID: string;
    cachedEmail: string;
    cachedFirstName: string;
    cachedLastName: string;
};
