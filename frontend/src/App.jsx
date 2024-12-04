import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { ShopPage } from "./pages/ShopPage";
import { ShopCategoryPage } from "./pages/ShopCategoryPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { AccountPage } from "./pages/AccountPage";

export const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<ShopPage />} />
					<Route path="/mens" element={<ShopCategoryPage category="men" />} />
					<Route
						path="/womens"
						element={<ShopCategoryPage category="women" />}
					/>
					<Route path="/kids" element={<ShopCategoryPage category="kid" />} />
					<Route path="/product" element={<ProductPage />}>
						<Route path=":productId" element={<ProductPage />} />
					</Route>
					<Route path="/cart" element={<CartPage />} />
					<Route path="/login" element={<AccountPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
