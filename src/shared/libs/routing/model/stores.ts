import { restore } from "effector";
import { historyInitialized, routeInitialized } from "./events";

export const $route = restore(routeInitialized, null);
export const $history = restore(historyInitialized, null);
