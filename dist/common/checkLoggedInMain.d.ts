import { type LocalState } from "../types.js";
import { DBUserAccessTokens, DBUsers, DatabaseReturnType } from "./database.js";
export declare function checkLogin<T extends boolean = false>(lState: Partial<LocalState>, includesToken?: T): Promise<T extends false ? DatabaseReturnType<typeof DBUsers> : [DatabaseReturnType<typeof DBUsers>, DatabaseReturnType<typeof DBUserAccessTokens>]>;
