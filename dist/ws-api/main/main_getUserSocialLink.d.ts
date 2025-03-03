declare const procedure: import("@badaimweeb/js-dtsocket").Procedure<void, ({
    type: "discord";
    userID: string;
    username: string;
    email?: undefined;
    firstName?: undefined;
    lastName?: undefined;
} | {
    type: "google";
    userID: string;
    email: string;
    firstName: string;
    lastName: string;
    username?: undefined;
} | {
    type: "github";
    userID: string;
    username: string;
    email?: undefined;
    firstName?: undefined;
    lastName?: undefined;
} | {
    type: string;
    userID: string;
    username?: undefined;
    email?: undefined;
    firstName?: undefined;
    lastName?: undefined;
})[], import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
