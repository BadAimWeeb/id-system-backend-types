import { type LocalState } from "../types.js";
import { DatabaseReturnType } from "./database/index.js";
import { DBUserAccessTokens } from "./database/DBUserAccessTokens.js";
import { DBUsers } from "./database/DBUsers.js";
export declare function checkLogin<T extends boolean = false>(lState: Partial<LocalState>, includesToken?: T): Promise<T extends false ? DatabaseReturnType<typeof DBUsers> : [DatabaseReturnType<typeof DBUsers>, DatabaseReturnType<typeof DBUserAccessTokens>]>;
