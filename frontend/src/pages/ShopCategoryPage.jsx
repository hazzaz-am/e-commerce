import "./css/ShopCategory.css";

import { useContext } from "react";
import PropTypes from "prop-types";

import { ShopContext } from "../context/CreateContext";
import { Item } from "../components/item/Item";

import dropdown_icon from "../components/assets/dropdown_icon.png";

export const ShopCategoryPage = ({ banner, category }) => {
	const { all_products } = useContext(ShopContext);

	return (
		<div className="shop-category">
			<img className="shop-category-banner" src={banner} alt="banner" />
			<div className="shop-category-indexsort">
				<p>
					<span>Showing 1-12</span> out of 36 products
				</p>
				<div className="shop-category-sort">
					Sort by <img src={dropdown_icon} alt="" />
				</div>
			</div>

			<div className="shop-category-products">
				{all_products.map((item) => {
					if (category === item.category) {
						return <Item key={item.id} item={item} />;
					} else {
						return null;
					}
				})}
			</div>

      <div className="shop-category-load-more">
        Explore More
      </div>
		</div>
	);
};

ShopCategoryPage.propTypes = {
	banner: PropTypes.string,
	category: PropTypes.string,
};
