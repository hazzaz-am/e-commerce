import { useContext } from "react";
import { ShopContext } from "../context/CreateContext";
import { useParams } from "react-router-dom";
import { BreadCrums } from "../components/breadcrums/BreadCrums";
import { ProductDisplay } from "../components/product-display/ProductDisplay";
import { DescriptionBox } from "../components/description-box/DescriptionBox";
import { RelatedProducts } from "../components/related-products/RelatedProducts";

export const ProductPage = () => {
	const { all_products } = useContext(ShopContext);
	const { productId } = useParams();
	const product = all_products.find((prod) => prod.id === Number(productId));

	return (
		<div>
			<BreadCrums product={product} />
			<ProductDisplay product={product} />
			<DescriptionBox />
			<RelatedProducts/>
		</div>
	);
};
