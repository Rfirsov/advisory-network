import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import { Route } from 'react-router-dom';
import store from './store';
// import setAuthorizationToken from './utils/setAuthorizationToken';
// import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';

import App from './components/App';

import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import ProductsPage from './components/products/ProductsPage';
import ProductItem from './components/products/ProductItem';

// if (localStorage.jwtToken) {
//   setAuthorizationToken(localStorage.jwtToken);
//   store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
// }

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    	<div>
    		<Route path="/" component={App} />
    		<Route exact path="/" component={Greetings} />
				<Route path="/signup" component={SignupPage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/products" component={ProductsPage} />
				<Route path="/products/:id" component={ProductItem} />
    	</div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
