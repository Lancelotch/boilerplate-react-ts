import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "../components";
import { Minimal as MinimalLayout } from "../layouts";
import paths from "./paths";
import { SignIn as SignInPage} from "../pages";

const Routes:React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={paths.LOGIN} />
      <RouteWithLayout
        component={SignInPage}
        exact
        layout={MinimalLayout}
        path={paths.LOGIN}
      />
    </Switch>
  );
};

export default Routes;
