import { ProviderInitialResponse, ProviderResponse } from "./index.js";
export declare function consumeAuthorizationCode(code: string): Promise<ProviderInitialResponse>;
export declare function consumeRefreshToken(refresh: string): Promise<ProviderInitialResponse>;
export declare function requestUserData(token: string): Promise<ProviderResponse>;
