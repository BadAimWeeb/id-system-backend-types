export interface YubikeyVerifyResult {
    /** YubiKey ID. For comparision, use {@link identityNum} instead. */
    identity: string;
    /** YubiKey ID in hex, useful for comparision. */
    identityHex: string;
    /** Status returned from server */
    status: string;
    /** Server used for verification */
    server: string;
    /** OTP verification status */
    ok: boolean;
}
export declare class YubikeyVerify {
    private readonly id;
    private readonly keyB64;
    /** **DO NOT MIX AND MATCH SERVERS. Use only one server pool.** */
    private readonly servers;
    private readonly key;
    constructor(id?: string, keyB64?: string, 
    /** **DO NOT MIX AND MATCH SERVERS. Use only one server pool.** */
    servers?: string[]);
    private static _getIdentity;
    private _objectToSortedString;
    private _calculateHMAC;
    verify(otp: string): Promise<YubikeyVerifyResult>;
    private _verifyWithServer;
}
