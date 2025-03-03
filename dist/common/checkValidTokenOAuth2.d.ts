import { type DatabaseReturnType } from "./database/index.js";
import { DBOAuth2AccessTokens } from "./database/DBOAuth2AccessTokens.js";
import { DBUsers } from "./database/DBUsers.js";
export declare function checkLogin<T extends boolean = false>(token: string, includesToken?: T): Promise<T extends false ? DatabaseReturnType<typeof DBUsers> : [DatabaseReturnType<typeof DBUsers>, DatabaseReturnType<typeof DBOAuth2AccessTokens>]>;
