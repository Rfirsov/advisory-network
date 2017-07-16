import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
    case AUTH_USER:
      return { 
      	...state, 
      	isAuthenticated: true 
    	};
    case UNAUTH_USER:
      return { 
      	...state, 
      	isAuthenticated: false 
      };
    case AUTH_ERROR:
      return { 
      	...state, 
      	error: action.payload 
      };
  	default: return state;
  }
}
