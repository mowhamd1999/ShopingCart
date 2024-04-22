import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import ProductsContextProvider from "./context/ProductsContextProvider";
import Detail from "./Components/Details/Detail";
import CartContextProvider from "./context/CartContextProvider";
import Shop from "./pages/Shop/Shop";
function App() {
  return (
    <ProductsContextProvider className="bg-indigo-400 w-full h-screen">
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
