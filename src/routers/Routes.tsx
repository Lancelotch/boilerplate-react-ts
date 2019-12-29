import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "../components";
import { Minimal as MinimalLayout, Main as MainLaylout } from "../layouts";
import paths from "./paths";
import {
  SignIn as SignInPage,
  Overview as OverviewPage,
  Content as ContentPage
} from "../pages";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={paths.LOGIN} />
      <RouteWithLayout
        component={SignInPage}
        exact
        layout={MinimalLayout}
        path={paths.LOGIN}
      />
      <RouteWithLayout
        component={OverviewPage}
        exact
        layout={MainLaylout}
        path={paths.OVERVIEW}
      />
      <RouteWithLayout
        component={ContentPage}
        exact
        layout={MainLaylout}
        path={paths.CONTENT}
      />
    </Switch>
  );
};

export default Routes;
