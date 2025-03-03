import { Collection } from "mongodb";
export declare const Database: import("mongodb").Db;
export declare function createIndexIfNotExists<T extends Collection<any>>(collection: T, indexName: string, index: Parameters<T["createIndex"]>["0"], options: Parameters<T["createIndex"]>["1"]): Promise<string | null>;
