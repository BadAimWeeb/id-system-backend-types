import { DBOAuth2AccessTokens, DBUsers, type DatabaseReturnType } from "./database.js";
export declare function checkLogin<T extends boolean = false>(token: string, includesToken?: T): Promise<T extends false ? DatabaseReturnType<typeof DBUsers> : [DatabaseReturnType<typeof DBUsers>, DatabaseReturnType<typeof DBOAuth2AccessTokens>]>;
