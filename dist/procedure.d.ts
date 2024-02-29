/// <reference types="node" resolution-mode="require"/>
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
        resolve: <TOut>(oCallback: (gState: GetTypeContext<Context, SymbolGlobalStateType>, lState: GetTypeContext<Context, SymbolLocalStateType>, input: TIn, socket: DTSocketServer_CSocket<Context>) => TOut | PromiseLike<TOut>) => import("@badaimweeb/js-dtsocket").Procedure<TIn, TOut, ServerContext<GlobalState, LocalState, EventTable, Session<WebSocket & {
            req: IncomingMessage;
        }>>>;
        streamResolve: <TOut_1>(oCallback: (gState: GetTypeContext<Context, SymbolGlobalStateType>, lState: GetTypeContext<Context, SymbolLocalStateType>, input: TIn, socket: DTSocketServer_CSocket<Context>) => AsyncIterable<TOut_1>, burst?: boolean | undefined) => import("@badaimweeb/js-dtsocket/dist/procedures.js").StreamingProcedure<TIn, TOut_1, ServerContext<GlobalState, LocalState, EventTable, Session<WebSocket & {
            req: IncomingMessage;
        }>>>;
    };
};
