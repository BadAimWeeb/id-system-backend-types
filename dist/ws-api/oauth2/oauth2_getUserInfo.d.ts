declare const procedure: import("@badaimweeb/js-dtsocket").Procedure<string, {
    uuid: string;
    username: string;
    userLanguage: string;
    emails: {
        address: string;
        isVerified: boolean;
        isPublic: boolean;
    }[] | null;
    phones: {
        number: string;
        isVerified: boolean;
        isPublic: boolean;
    }[] | null;
    firstName: string | null;
    lastName: string | null;
    nameOrder: "first-last" | "last-first" | null;
    avatar: string | null;
    links: {
        github: {
            username: string;
            id: string;
        } | null;
        google: {
            id: string;
            firstName: string;
            lastName: string;
        } | null;
        discord: {
            username: string;
            id: string;
        } | null;
    };
}, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
