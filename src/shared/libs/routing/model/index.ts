import * as events from "./events";
import * as stores from "./stores";
import * as effects from "./effects";

export const routingModel = {
  ...events,
  ...stores,
  ...effects
};
