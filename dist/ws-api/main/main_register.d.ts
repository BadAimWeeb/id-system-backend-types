/// <reference types="ws" />
/// <reference types="node" />
declare const procedure: import("@badaimweeb/js-dtsocket").Procedure<{
    email: string;
    firstName: string;
    lastName: string;
    nameOrder: "first-last" | "last-first";
    username: string;
    password: string;
    captcha: string;
    phone?: string | undefined;
    phoneCountry?: string | undefined;
    pgp?: {
        name: string;
        key: string;
    } | undefined;
    userLanguage?: string | undefined;
}, string, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
