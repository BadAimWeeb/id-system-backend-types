/// <reference types="ws" />
/// <reference types="node" />
declare const procedure: import("@badaimweeb/js-dtsocket").Procedure<{
    publicKey: string;
    name: string;
    boundTo: string[];
}, null, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
