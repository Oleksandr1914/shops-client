import { Routes, Route, Navigate } from "react-router-dom";
import HeaderShop from "./components/HeaderShop/HeaderShop";
import Shops from "./page/shops/Shops";
import ShoppingCart from "./page/shoppingCart/ShoppingCart";
import ShopMenu from "./components/ShopMenu/ShopMenu";
import ShopProvider from "./hoc/ShopProvider";

function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={<HeaderShop />}>
          <Route index element={<Navigate to="/mcdonalds" />} />
          <Route path="/" element={<Shops />}>
            <Route path=":id" element={<ShopMenu />} />
          </Route>
          <Route path="/shoppingCart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </ShopProvider>
  );
}

export default App;
