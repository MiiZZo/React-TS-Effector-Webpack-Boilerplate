import { ComponentType, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { routingModel } from "shared/libs/routing";

export const withConnectRouteToModel =
  (Component: ComponentType<RouteComponentProps>) =>
  (props: RouteComponentProps) => {
    useEffect(() => {
      routingModel.historyInitialized(props.history);
      routingModel.routeInitialized(props.match);
    }, []);

    return <Component {...props} />;
  };
