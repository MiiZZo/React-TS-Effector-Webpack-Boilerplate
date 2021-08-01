import { match } from "react-router-dom";
import { History } from "history";
import { app } from "shared/libs/app";

interface Params {}

export const routeInitialized = app.event<match<Params> | null>();
export const historyInitialized = app.event<History<unknown>>();
