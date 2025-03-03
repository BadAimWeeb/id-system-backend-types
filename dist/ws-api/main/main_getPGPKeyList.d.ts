declare const procedure: import("@badaimweeb/js-dtsocket").Procedure<void, {
    name: string;
    publicKey: string;
    boundTo: string[];
    stripUserID: boolean;
}[], import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
