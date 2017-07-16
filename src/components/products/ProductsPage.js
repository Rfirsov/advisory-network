import React from 'react';
import { connect } from 'react-redux';
import ProductsForm from './ProductsForm';
import { getProducts } from '../../actions/productsActions';

import '../../styles/bootstrap-addon.css';

class ProductsPage extends React.Component {
	componentDidMount() {
		this.props.getProducts();
	}

	render() {
		if (this.props.isFetching) {
			return (
				<div className="container text-center">
						<span className="glyphicon glyphicon-refresh gly-spin gi-3x"></span>
				</div>
			);
		}
		const { productList } = this.props;
		return (
			<div className="container">
					<ProductsForm productList={productList} />
  	   </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		productList: state.products.productList,
		isFetching: state.products.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getProducts: () => dispatch(getProducts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
