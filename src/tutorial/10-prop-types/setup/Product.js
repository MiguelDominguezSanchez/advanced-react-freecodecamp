import React from 'react';
import ProTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';
const Product = ({ image, name, price }) => {
	const url = image && image.url;
	return (
		<article className="product">
			<img src={url || defaultImage} alt={name || 'default name'} />
			<h4>{name}</h4>
			<p>${price || 3.99}</p>
		</article>
	);
};

Product.propTypes = {
	image: ProTypes.object.isRequired,
	name: ProTypes.string.isRequired,
	price: ProTypes.number.isRequired,
};
// Product.defaultProps = {
// 	name: 'default name',
// 	price: 3.99,
// 	image: defaultImage,
// };

export default Product;
