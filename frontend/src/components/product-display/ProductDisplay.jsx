import "./ProductDisplay.css";

import PropTypes from "prop-types";

import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/CreateContext";

export const ProductDisplay = ({ product }) => {
	const { handleAddToCart } = useContext(ShopContext);

	const { id, image, name, old_price, new_price } = product;

	return (
		<div className="product-display">
			<div className="product-display__left">
				<div className="product-display__img-list">
					<img src={image} alt="" />
					<img src={image} alt="" />
					<img src={image} alt="" />
					<img src={image} alt="" />
				</div>

				<div className="product-display__img">
					<img className="product-display__main-img" src={image} alt="" />
				</div>
			</div>

			<div className="product-display__right">
				<h1>{name}</h1>
				<div className="product-display__right-star">
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_dull_icon} alt="" />
					<p>(122)</p>
				</div>
				<div className="product-display__right-prices">
					<div className="product-display__right-price__old">${old_price}</div>
					<div className="product-display__right-price__new">${new_price}</div>
				</div>
				<div className="product-display__right-description">
					A lightweight usually knitted, pullover shirt, close-fitting and with
					a round neckline and short sleeves, worn as an undershirt or outer
					garment.
				</div>

				<div className="product-display__right-size">
					<h1>Select Size</h1>
					<div className="product-display__right-sizes">
						<div>S</div>
						<div>M</div>
						<div>L</div>
						<div>XL</div>
						<div>XXL</div>
					</div>
				</div>
				<button onClick={() => handleAddToCart(id)}>ADD TO CART</button>
				<p className="product-display__right-category">
					<span>Category :</span> Women, T-Shirt, Crop Top
				</p>
				<p className="product-display__right-category">
					<span>Tags :</span> Modern, Latest
				</p>
			</div>
		</div>
	);
};

ProductDisplay.propTypes = {
	product: PropTypes.object,
	id: PropTypes.number,
	image: PropTypes.string,
	name: PropTypes.string,
	old_price: PropTypes.number,
	new_price: PropTypes.number,
};
