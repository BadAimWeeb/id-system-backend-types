/// <reference types="ws" />
/// <reference types="node" resolution-mode="require"/>
declare const procedure: import("@badaimweeb/js-dtsocket").Procedure<{
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    nameOrder: "first-last" | "last-first";
    captcha: string;
    pgp?: {
        name: string;
        key: string;
    } | null | undefined;
    userLanguage?: string | undefined;
    phone?: string | undefined;
    password?: string | null | undefined;
    phoneCountry?: string | null | undefined;
    socialLink?: {
        type: "github" | "discord" | "google";
        intermediateToken: string;
    } | null | undefined;
}, string, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
