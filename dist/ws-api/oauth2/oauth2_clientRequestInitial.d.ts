declare const procedure: import("@badaimweeb/js-dtsocket").Procedure<{
    redirectURI: string;
    clientID: string;
    responseType: "code";
    scope?: string | undefined;
}, {
    clientName: string;
    clientDescription: string;
    clientOwnerName: string | null;
    clientOwnerRealName: {
        first: string;
        last: string;
    } | null;
    scopeRequested: string[];
    scopeNew: string[];
    tos: any;
    privacyPolicy: any;
    domain: string;
    verified: boolean;
}, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
