import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/common.less';
import './assets/styles/color.less';
import './assets/styles/reset.less';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import RouterList from './router/router'
interface RouterProps {
  path: string,
  key: string,
  component: any
  children?: Array<RouterProps>,
}
ReactDOM.render(
  <Router>
    <Switch>
      {renderRouter(RouterList)}
      <Redirect to="/login"></Redirect>
    </Switch>
  </Router>,
  document.getElementById('root')
);
// 递归解析路由
function renderRouter(routes: Array<RouterProps>): Array<any> {
  return routes.map(item => {
    if (item.children) {
      return (<Route path={item.path} component={item.component} key={item.key}>{renderRouter(item.children)}</Route>)
    } else {
      return (<Route path={item.path} component={item.component} key={item.key}></Route>)
    }
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
