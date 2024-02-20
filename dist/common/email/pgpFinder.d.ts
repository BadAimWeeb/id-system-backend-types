export type KeyDiscoveryInfo = {
    where: string;
    key: string;
};
export declare function findPGPKey(rawEmail: string): Promise<{
    where: string;
    key: string;
    keyID: string;
    fingerprint: string;
}[]>;
