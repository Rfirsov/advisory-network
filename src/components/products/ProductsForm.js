import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ProductItem from './ProductItem';


class ProductsForm extends React.Component {
	render() {
		let { productList } = this.props;
		 const productSelect = (
		 	<ul className="list-inline">
		 		{productList.map((product) =>
		 		<li 
		 			key={product.id}
		 			className="btn btn-default"
		 		>
		 			<Link to={`${this.props.match.url}/${product.id}`}>
		 			{product.title}
		 			</Link>
		 		</li> 
		 		)}
		 	</ul>
		 );
		return (
			<div>
				{productSelect}
			</div>

		);
	}
}


export default withRouter(ProductsForm);