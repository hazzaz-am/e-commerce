import "./Breadcrums.css";

import PropTypes from "prop-types";

import arrow_icon from "../assets/breadcrum_arrow.png";

export const BreadCrums = ({ product }) => {
	const { category, name } = product;

	return (
		<div className="breadcrum">
			HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
			{category} <img src={arrow_icon} alt="" /> {name}
		</div>
	);
};

BreadCrums.propTypes = {
	product: PropTypes.object,
	category: PropTypes.string,
	name: PropTypes.string,
};
