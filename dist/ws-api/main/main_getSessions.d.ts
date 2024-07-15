declare const procedure: import("@badaimweeb/js-dtsocket").Procedure<void, {
    ip: any;
    browser: string | undefined;
    os: string | undefined;
    device: "mobile" | "tablet" | "console" | "smarttv" | "wearable" | "xr" | "embedded" | undefined;
    location: import("mmdb-lib").CityResponse | null;
    tor: boolean;
    cloudflare: boolean;
    asn: number | undefined;
    asnOrg: string | undefined;
    createdAt: number;
    k: string;
    self: boolean;
}[], import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default procedure;
