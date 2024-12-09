import { Link } from "react-router-dom";
import "./Item.css";

import PropTypes from "prop-types";

export const Item = ({ item }) => {
	const { id, image, name, old_price, new_price } = item;
	return (
		<div className="item">
			<Link to={`/product/${id}`}>
				<img onClick={window.scrollTo(0, 0)} src={image} alt="item-image" />
			</Link>
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
	id: PropTypes.number,
	name: PropTypes.string,
	old_price: PropTypes.number,
	new_price: PropTypes.number,
};
