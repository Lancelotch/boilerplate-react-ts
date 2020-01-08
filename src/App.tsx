import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Routes from "./routers/Routes";
import "./internationalization";
import "./assets/css/style.css";
import { RootContext, ObjectsContext } from "./contexts";

const browserHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootContext>
        <ObjectsContext>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ObjectsContext>
      </RootContext>
    </ThemeProvider>
  );
};

export default App;
