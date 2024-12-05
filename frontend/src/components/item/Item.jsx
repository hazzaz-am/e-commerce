import "./Item.css";

import PropTypes from "prop-types";

export const Item = ({ item }) => {
	const { image, name, old_price, new_price } = item;
	return (
		<div className="item">
			<img src={image} alt="item-image" />
			<p>{name}</p>
			<div className="item-prices">
				<div className="item-price-new">$ {new_price}</div>
				<div className="item-price-old">$ {old_price}</div>
			</div>
		</div>
	);
};

Item.propTypes = {
	item: PropTypes.object,
	image: PropTypes.string,
	name: PropTypes.string,
	old_price: PropTypes.number,
	new_price: PropTypes.number,
};
