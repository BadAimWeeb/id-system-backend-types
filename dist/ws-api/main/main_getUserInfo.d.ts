/// <reference types="ws" />
/// <reference types="node" />
declare const procedure: import("@badaimweeb/js-dtsocket").Procedure<void, {
    firstName: string;
    lastName: string;
    nameOrder: "first-last" | "last-first";
    emails: {
        address: string;
        isVerified: boolean;
        isPublic: boolean;
    }[];
    phones: {
        number: string;
        isVerified: boolean;
        isPublic: boolean;
    }[];
    userLanguage: string;
    passkeysOnly: boolean;
    hasPasskeys: boolean;
}, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
