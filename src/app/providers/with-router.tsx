import { ReactNode } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

export const withRouter = (component: () => ReactNode) => () => {
  return (
    <BrowserRouter>
      <Switch>{component()}</Switch>
    </BrowserRouter>
  );
};
