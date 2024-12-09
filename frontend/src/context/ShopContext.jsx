import PropTypes from "prop-types";

import all_products from "../components/assets/all_product";
import { ShopContext } from "./CreateContext";
import { useState } from "react";

const getDefaultCartValue = () => {
	let cart = {};

	for (let i = 0; i < all_products.length; i++) {
		cart[i] = 0;
	}

	return cart;
};

const ShopContextProvider = ({ children }) => {
	const [cartItem, setCartItem] = useState(getDefaultCartValue());

	const handleAddToCart = (itemId) => {
		setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
		console.log(cartItem);
	};

	const handleRemoveFromCart = (itemId) => {
		setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const handleTotalCartAmount = () => {
		let totalAmount = 0;

		for (const item in cartItem) {
			if (cartItem[item] > 0) {
				let itemInfo = all_products.find(
					(product) => product.id === Number(item)
				);
				totalAmount += itemInfo.new_price * cartItem[item];
			}
		}
		return totalAmount;
	};

	const getTotalCartItems = () => {
		let totalItems = 0;

		for (const item in cartItem) {
			if (cartItem[item] > 0) {
				totalItems += cartItem[item]
			}
		}

		return totalItems
	}

	const contextValue = {
		all_products,
		cartItem,
		handleAddToCart,
		handleRemoveFromCart,
		handleTotalCartAmount,
		getTotalCartItems
	};

	return (
		<ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
	);
};

export default ShopContextProvider;

ShopContextProvider.propTypes = {
	children: PropTypes.any,
};
