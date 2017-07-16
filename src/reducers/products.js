import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from '../constants';


const initialState = {
		productList: [],
		isFetching: true,
		error: ''
};

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_PRODUCTS_REQUEST:
		return {
			...state,
			isFetching: true
		}
		case GET_PRODUCTS_SUCCESS:
		return {
			...state,
			isFetching: false,
			productList: action.products
		}
		case GET_PRODUCTS_FAILURE:
		return {
			...state,
			error: action.error
		}
		default: return state;
	}
}