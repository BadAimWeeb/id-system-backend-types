import "dotenv/config";
import "./scripts/databaseMigration.js";
import "./scripts/cleaningClock.js";
import "./scripts/autoupdate.js";
import { type Session } from "@badaimweeb/js-protov2d";
import { DTSocketServer, type ServerContext } from "@badaimweeb/js-dtsocket";
import * as WSAPI from "./ws-api/index.js";
import type { GlobalState, LocalState, EventTable } from "./types.js";
declare const apiServer: DTSocketServer<ServerContext<GlobalState, LocalState, EventTable, Session<any>, typeof WSAPI>>;
export type Server = typeof apiServer;
export {};
