import React from "react";
import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/api";
export const ProductsContext = createContext();
const ProductsContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
