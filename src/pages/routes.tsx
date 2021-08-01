import loadable from "@loadable/component";
import { ComponentType, ReactNode } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { pathSchemas } from "shared/libs/routing";
import { withPageProviders } from "./providers";

interface RouteConfig {
  page: ComponentType<RouteComponentProps>;
  path: string;
  notExact?: boolean;
}

const HomePage = loadable(() => import(`./home`));
const SignInPage = loadable(() => import(`./sign-in`));

const routes: RouteConfig[] = [
  {
    page: (props) => <HomePage {...props} fallback={<div>loading</div>} />,
    path: pathSchemas.home,
  },
  {
    page: (props) => <SignInPage {...props} fallback={<div>loading</div>} />,
    path: pathSchemas.signIn,
  },
];

export const Pages = () => (
  <>
    {routes.map(({ notExact, path, page }) => (
      <Route
        key={path}
        path={path}
        component={withPageProviders(page)}
        exact={!notExact}
      />
    ))}
  </>
);

console.log(Pages);
