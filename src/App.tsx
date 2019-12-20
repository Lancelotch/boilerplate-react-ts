import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './routers/Routes';
import './internationalization';
import './assets/css/style.css';

const browserHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;