export type GlobalState = {
    ipChallenge: Map<string, number>;
    internalRegenUserAuthLock: Map<string, Promise<string>>;
    cache: Map<string, any>;
};
export type LocalState = {
    appAuthData: {
        appUUID: string;
        appSecret: string;
    };
    userAuthData: string;
    loginRequestTime: number[];
    loginFailedCount: number;
    pgpAutoFindTimestamp: number;
    passKeyChallengeType: "enroll" | "login" | "verify" | "enroll-verify";
    passKeyNonce: string;
    passKeyNonce2: string;
    passKeyNonceTimestamp: number;
    mfaChallengeType: string;
    mfaChallengeLoginUUID: string;
};
export type EventTable = {
    csEvents: {};
    scEvents: {};
};
export declare enum ErrorCode {
    NOT_IMPLEMENTED = "BAWID#-1",
    GENERIC_ERROR = "BAWID#0",
    INVALID_PARAMETER = "BAWID#1",
    CAPTCHA_VERIFY_FAILED = "BAWID#2",
    WEAK_PASSWORD = "BAWID#3",
    COMPROMISED_PASSWORD = "BAWID#4",
    USERNAME_TAKEN = "BAWID#5",
    CONTACT_INFO_USED = "BAWID#6",
    RATE_LIMITED = "BAWID#7",
    CAPTCHA_REQUIRED = "BAWID#8",
    INVALID_ID = "BAWID#9",
    INVALID_AUTH = "BAWID#10",
    NOT_LOGGED_IN = "BAWID#11",
    MFA_REQUIRED = "BAWID#12",
    MFA_INVALID = "BAWID#13",
    OPERATION_NOT_PERMITTED = "BAWID#14"
}
