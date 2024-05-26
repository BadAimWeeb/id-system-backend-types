/// <reference types="ws" />
/// <reference types="node" resolution-mode="require"/>
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
    socialOnlyLogin: boolean;
    avatar: {
        type: string;
        url: string;
        email?: undefined;
        originalURL?: undefined;
    } | {
        type: string;
        email: string;
        url: string;
        originalURL?: undefined;
    } | {
        type: string;
        originalURL: string;
        url: string;
        email?: undefined;
    } | null;
}, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
