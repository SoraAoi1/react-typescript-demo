import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import RouterList from './router/router'
interface RouterProps {
  path?: string,
  component?: Component,
  key?: string,
  children?: Array<any>
}
ReactDOM.render(
  <Router>
    <Switch>
      {RouterList.map((item: any) => {
        return (
          <Route path={item.path} component={item.component} key={item.key}>
            {
            item.children? item.children.map((childItem: any) => {
              return  <Route path={childItem.path} component={childItem.component} key={childItem.key}></Route>
            }): []
            }
          </Route>
        )
      })}
      <Redirect to="/login"></Redirect>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
