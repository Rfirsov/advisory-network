import axios from 'axios';
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from '../constants';

const ROOT_URL = 'https://smktesting.herokuapp.com';


export function getProducts() {
	return (dispatch) => {
		dispatch(getProductsRequest())
		return axios.get(`${ROOT_URL}/api/products/`)
		.then(res => res.data)
		.then(products => dispatch(getProductsSuccess(products)))
		.catch(error => dispatch(getProductsError(error)))
	}
}

function getProductsRequest() {
	return {
		type: GET_PRODUCTS_REQUEST
	}
}

function getProductsSuccess(products) {
	return {
		type: GET_PRODUCTS_SUCCESS,
		products
	}
}

function getProductsError(error) {
	return {
		type: GET_PRODUCTS_FAILURE,
		error
	}
}