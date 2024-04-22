import React, { useContext } from "react";
// context
import { CartContext } from "../../context/CartContextProvider";
// components
import Cart from "../../Components/Cart/Cart";
const Shop = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className="pt-20">
      <div className="py-20 mx-40 lg:flex justify-around md:block min-w-[200px]">
        <div className=" grow mr-8">
          {state.itemSelected.map((item) => (
            <Cart key={item.id} data={item} />
          ))}
        </div>
        {state.itemSelected.length > 0 && (
          <div className="w-[20%] bg-gray-100 rounded-md h-[200px] shadow-lg min-w-[300px]">
            <div className="py-5 px-5">
              <h4>Total Item : {state.itemCounter} </h4>
              <h4 className="my-10">Total Price: {state.total} $</h4>
              <div className="flex justify-between ">
                <button onClick={() => dispatch({ type: "Clear" })}>
                  Clear
                </button>
                <button
                  className="btn"
                  onClick={() => dispatch({ type: "CheckOut" })}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
