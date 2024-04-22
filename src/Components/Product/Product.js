import React, { useContext } from "react";
import { shorten, IsInCart, Quantity } from "../helper/function";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import { BsTrash3 } from "react-icons/bs";
const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className="rounded-lg bg-white shadow-sm ring-1 ring-slate-900/5 hover:shadow-xl transition-all duration-200 p-[20px]">
      <img
        src={productData.image}
        alt={productData.title}
        className="w-[200px] h-[250px]"
      />
      <h2 className="text-xl pt-5 font-extrabold">
        {shorten(productData.title)}
      </h2>
      <p className="py-5 text-sm">{productData.price} $</p>
      <div className="flex justify-between py-1 px-0.1 items-center">
        <Link
          className="font-bold hover:text-blue-700 transition-all duration-200"
          to={`/products/${productData.id}`}
        >
          Detail
        </Link>
        <div className="flex items-center">
          {Quantity(state, productData.id) === 1 && (
            <button
              className="btn"
              onClick={() => dispatch({ type: "Remove", payload: productData })}
            >
              <BsTrash3 className='my-1' />
            </button>
          )}
          {Quantity(state, productData.id) > 1 && (
            <button
              className="btn px-3"
              onClick={() =>
                dispatch({ type: "Decrease", payload: productData })
              }
            >
              -
            </button>
          )}
          {IsInCart(state, productData.id) ? (
            <button
              className="btn ml-2"
              onClick={() =>
                dispatch({ type: "Increase", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "Add_Item", payload: productData })
              }
              className="btn"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
