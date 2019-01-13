import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import stores from './stores';
import './index.css';
import App from './App';
import theme from './styles/theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider {...stores}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
