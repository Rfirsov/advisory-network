import axios from 'axios';
import { push } from 'react-router-redux';
import history from '../history';
// import setAuthorizationToken from '../utils/setAuthorizationToken';
// import jwt from 'jsonwebtoken';
// import jwtDecode from 'jwt-decode';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../constants';

const ROOT_URL = 'https://smktesting.herokuapp.com';

export function signupUser({ username, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/api/register/`, { username, password })
    .then((res) => {
     dispatch(authUser());
     //save token from the server to local storage
     localStorage.setItem('token', res.data.token);
    })
    .catch(() => {
      dispatch(authError('Bad Login')); 
    });
  }
}

export function loginUser({ username, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/api/login/`, { username, password })
    .then((res) => {
     dispatch(authUser());
     //save token from the server to local storage
     localStorage.setItem('token', res.data.token);
    })
    .catch((res) => {
      dispatch(authError(res.data.error)); 
    });
  }
}

export function logoutUser() {
  return (dispatch) => {
  localStorage.removeItem('token');
  dispatch(unauthUser());
  }
}

function authUser() {
  return {
    type: AUTH_USER
  };
}

function unauthUser() {
  return {
    type: UNAUTH_USER
  };
}

function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
