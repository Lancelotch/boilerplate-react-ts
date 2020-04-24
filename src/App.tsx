import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Routes from "./routers/Routes";
import "./internationalization";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { RootContext } from "./contexts";

const browserHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootContext>
          <Router history={browserHistory}>
            <Routes />
          </Router>
      </RootContext>
    </ThemeProvider>
  );
};

export default App;
