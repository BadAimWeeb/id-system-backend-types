import { type Session } from "@badaimweeb/js-protov2d";
import type { WebSocket } from "ws";
import { type ServerContext } from "@badaimweeb/js-dtsocket";
import type { GlobalState, LocalState, EventTable } from "./types.js";
import type { IncomingMessage } from "http";
export declare const GState: GlobalState;
export declare const p: {
    input: <TIn>(parser: {
        parse: (input: unknown) => TIn;
    }) => {
        resolve: <TOut>(oCallback: (gState: GetTypeContext<Context, SymbolGlobalStateType>, lState: Partial<GetTypeContext<Context, SymbolLocalStateType>>, input: TIn, socket: DTSocketServer_CSocket<Context>) => TOut | PromiseLike<TOut>) => import("@badaimweeb/js-dtsocket").Procedure<TIn, TOut, ServerContext<GlobalState, LocalState, EventTable, Session<WebSocket & {
            req: IncomingMessage;
        }>>>;
        streamResolve: <TOut>(oCallback: (gState: GetTypeContext<Context, SymbolGlobalStateType>, lState: Partial<GetTypeContext<Context, SymbolLocalStateType>>, input: TIn, socket: DTSocketServer_CSocket<Context>) => AsyncIterable<TOut>, burst?: boolean) => import("@badaimweeb/js-dtsocket/dist/procedures.js").StreamingProcedure<TIn, TOut, ServerContext<GlobalState, LocalState, EventTable, Session<WebSocket & {
            req: IncomingMessage;
        }>>>;
    };
};
