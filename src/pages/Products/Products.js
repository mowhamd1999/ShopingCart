import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";
import Product from "../../Components/Product/Product";
const Products = () => {
  const datas = useContext(ProductsContext);
  return (
    <div className="text-black pt-20 flex justify-center my-10">
      <div className="grid lg:grid-cols-4 gap-x-10 gap-y-5 md:grid-cols-2 sm:grid-cols-1 text-center">
        {datas.map((data) => (
          <Product key={data.id} productData={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
