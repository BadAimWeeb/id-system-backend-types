declare const procedure: import("@badaimweeb/js-dtsocket").Procedure<{
    type: "email" | "phone";
    value: string;
}, boolean, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
