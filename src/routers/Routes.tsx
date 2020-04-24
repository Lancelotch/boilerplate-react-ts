import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "../components";
import { Minimal as MinimalLayout, Main as MainLaylout } from "../layouts";
import paths from "./paths";
import {
  SignIn as SignInPage,
  Crawlback as CrawlbackPage
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
        component={CrawlbackPage}
        exact
        layout={MainLaylout}
        path={paths.CRAWLBACK}
      />
    </Switch>
  );
};

export default Routes;
