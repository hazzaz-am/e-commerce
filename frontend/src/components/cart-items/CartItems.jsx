import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/CreateContext";

import remove_icon from "../assets/cart_cross_icon.png";

export const CartItems = () => {
	const {handleTotalCartAmount, all_products, cartItem, handleRemoveFromCart } =
		useContext(ShopContext);

	return (
		<div className="cart-items">
			<div className="cart-items__format-main">
				<p>Products</p>
				<p>Title</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Total</p>
				<p>Remove</p>
			</div>
			<hr />

			{all_products.map((item) => {
				if (cartItem[item.id] > 0) {
					return (
						<div key={item.id}>
							<div className="cart-items__format cart-items__format-main">
								<img
									src={item.image}
									alt=""
									className="cart-icon__product-icon"
								/>
								<p>{item.name}</p>
								<p>$ {item.new_price}</p>
								<button className="cart-items__quantity">
									{cartItem[item.id]}
								</button>
								<p>$ {item.new_price * cartItem[item.id]}</p>
								<img
									className="cart-icon__remove-icon"
									src={remove_icon}
									onClick={() => handleRemoveFromCart(item.id)}
									alt=""
								/>
							</div>
							<hr />
						</div>
					);
				}
				return null;
			})}

			{/* cart total section */}
			<div className="cart-items__down">
				<div className="cart-items__total">
					<h1>Cart Total</h1>
					<div>
						<div className="cart-items__total-item">
							<p>Subtotal</p>
							<p>$ {handleTotalCartAmount()}</p>
						</div>
						<hr />
						<div className="cart-items__total-item">
							<p>Shipping Fee</p>
							<p>Free</p>
						</div>
						<hr />
						<div className="cart-items__total-item">
							<h3>Total</h3>
							<h3>$ {handleTotalCartAmount()}</h3>
						</div>
					</div>
					<button>PROCEED TO CHECKOUT</button>
				</div>
				<div className="cart-items__promocode">
					<p>If you have a promot code, Enter it here</p>
					<div className="cart-items__promo-box">
						<input type="text" placeholder="Promo Code" />
						<button>Apply</button>
					</div>
				</div>
			</div>
		</div>
	);
};
