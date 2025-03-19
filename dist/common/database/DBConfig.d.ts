import { JWK } from "jose";
export declare const DBConfig: import("mongodb").Collection<{
    key: string;
    value: any;
}>;
export type ConfigType = {
    signingKeys: Record<"RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512" | "PS256" | "PS384" | "PS512" | "EdDSA" | "ES256K", {
        private: JWK;
        public: JWK;
    }>;
};
export declare function getDBConfig<T extends keyof ConfigType>(key: T): Promise<ConfigType[T] | null>;
export declare function setDBConfig<T extends keyof ConfigType>(key: T, value: ConfigType[T]): Promise<void>;
