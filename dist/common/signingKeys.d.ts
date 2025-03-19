import { JSONWebKeySet } from "jose";
import { ConfigType } from "./database/DBConfig.js";
declare const _default: ConfigType["signingKeys"];
export default _default;
export declare const jwks: JSONWebKeySet;
export declare const verifyUsingJWKs: (protectedHeader?: import("jose").JWSHeaderParameters, token?: import("jose").FlattenedJWSInput) => Promise<import("jose").CryptoKey>;
