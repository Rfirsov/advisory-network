import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ProductItem from './ProductItem';


class ProductsForm extends React.Component {
	render() {
		let { productList } = this.props;
		const productSelect = productList.map((product) => {
			return (
		 		<Link 
		 			to={`${this.props.match.url}/${product.id}`}
		 			className="list-group-item"
		 			key={product.id}>
		 			{product.title}
		 		</Link>
			)
		});
		return (
			<div>
				{productSelect}
			</div>
		);
	}
}


export default withRouter(ProductsForm);