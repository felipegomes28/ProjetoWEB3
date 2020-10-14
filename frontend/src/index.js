import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Main/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CrudPassageiro from './Components/User/CrudPassageiro';
import CrudMotorista from './Components/User/CrudMotorista';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/passageiro" component={CrudPassageiro} />
          <Route path="/motorista" component={CrudMotorista} />
      </Switch>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
