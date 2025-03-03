declare const procedure: import("@badaimweeb/js-dtsocket").Procedure<{
    type: "github" | "discord" | "google";
    code: string;
}, {
    register: boolean;
    intermediateToken: string;
    hint: {
        username: string | undefined;
        email: string | undefined;
        firstName: string | undefined;
        lastName: string | undefined;
        phoneE164: string | undefined;
    };
    sessionToken?: undefined;
} | {
    register: boolean;
    sessionToken: string;
    intermediateToken?: undefined;
    hint?: undefined;
}, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
