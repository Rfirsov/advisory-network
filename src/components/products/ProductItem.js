import React from 'react';
import { connect } from 'react-redux';


class ProductItem extends React.Component {
	render() {
		if (this.props.isFetching) {
			return (
				<div className="container text-center">
						<span className="glyphicon glyphicon-refresh gly-spin gi-3x"></span>
				</div>
			);
		}
		const { productList } = this.props;
		const id = this.props.match.params.id;
		const product = productList.filter(product => {
      if (product.id == id) {
        return product;
      }
    });
		return (
			<div className="container">
				<h4>{product[0].title}</h4>
				<img src={product[0].img} alt={product[0].title} />
				<p>{product[0].text}</p>
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



export default connect(mapStateToProps)(ProductItem);