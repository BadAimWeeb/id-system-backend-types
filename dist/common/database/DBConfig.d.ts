export declare const DBConfig: import("mongodb").Collection<{
    key: string;
    value: any;
}>;
export type ConfigType = {};
export declare function getDBConfig<T extends keyof ConfigType>(key: T): Promise<ConfigType[T] | null>;
export declare function setDBConfig<T extends keyof ConfigType>(key: T, value: ConfigType[T]): Promise<void>;
