import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { ShopPage } from "./pages/ShopPage";
import { ShopCategoryPage } from "./pages/ShopCategoryPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { AccountPage } from "./pages/AccountPage";
import { Footer } from "./components/footer/Footer";

import mens_banner from "./components/assets/banner_mens.png"
import womens_banner from "./components/assets/banner_women.png"
import kids_banner from "./components/assets/banner_kids.png"

export const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<ShopPage />} />
					<Route path="/mens" element={<ShopCategoryPage banner={mens_banner} category="men" />} />
					<Route
						path="/womens"
						element={<ShopCategoryPage banner={womens_banner} category="women" />}
					/>
					<Route path="/kids" element={<ShopCategoryPage banner={kids_banner} category="kid" />} />
					<Route path="/product" element={<ProductPage />}>
						<Route path=":productId" element={<ProductPage />} />
					</Route>
					<Route path="/cart" element={<CartPage />} />
					<Route path="/login" element={<AccountPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};
