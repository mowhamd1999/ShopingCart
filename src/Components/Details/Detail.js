import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContextProvider";
const Detail = () => {
  const id = useParams().id;
  const datas = useContext(ProductsContext);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(datas.find((item) => item.id == id));
  }, []);
  //   console.log(product)
  return (
    <div className="pt-20 w-full h-auto">
      <div className="rounded-full mx-[20%] my-20 md:grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 py-20">
        <div className="flex justify-center">
          <img
            className="lg:w-[250px] lg:h-[300px] md:w-[200px] md:h-[250px] sm:pb-10"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <h4 className="font-bold text-md pt-5">
            Category: {product.category}
          </h4>
          <p className="text-sm pt-5 mr-15 font-light">{product.description}</p>
          <p className="py-10 font-light">Price: {product.price} $</p>
          <div className="flex items-center justify-between px-10">
            <button className="btn">Buy</button>
            <Link to='/products' className="btn" >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
