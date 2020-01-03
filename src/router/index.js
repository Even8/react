import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
// 热加载模块
import {hot} from 'react-hot-loader';
import Store from '../redux';
import DevTools from '../redux/DevTools';
import App from '../containers/app';
import Docs from '../containers/docs';

// 从新封装路由组件；
const Router = ({component: Component, children, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} ><Switch>{children}</Switch></Component>
    )}
  />
);

const Root = () => (
  <BrowserRouter>
    <Provider store={Store}>
      <div className="router-content">
        {__DEVELOPMENT__ && <DevTools />}
        <Switch>
          <Router path="/" component={App} >
            <Router exact path="/docs" component={Docs} />
          </Router>
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(Root);