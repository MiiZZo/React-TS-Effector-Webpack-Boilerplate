import compose from "compose-function";
import { withConnectRouteToModel } from "./with-connect-route-to-model";

export const withPageProviders = compose(withConnectRouteToModel);
