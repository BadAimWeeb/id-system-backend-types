declare const procedure: import("@badaimweeb/js-dtsocket/dist/procedures.js").StreamingProcedure<{
    url: string;
    type: "url";
} | {
    email: string;
    type: "gravatar";
} | {
    type: "http-upload";
}, readonly ["HTTP_UPLOAD", `${string}-${string}-${string}-${string}-${string}`] | readonly ["SUCCESS"], import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
