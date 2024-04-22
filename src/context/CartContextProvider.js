import React, { createContext } from "react";
import { useReducer } from "react";

const initialState = {
  itemSelected: [],
  itemCounter: 0,
  total: 0,
  isCheckOut: false,
};

const sumItem = (items) => {
  const itemCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  ).toFixed(2);
  return { itemCounter, total };
};
const cartReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "Add_Item":
      if (!state.itemSelected.find((item) => item.id === action.payload.id)) {
        state.itemSelected.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        itemSelected: [...state.itemSelected],
        ...sumItem(state.itemSelected),
      };
    case "Remove":
      const newSelectedItem = state.itemSelected.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        itemSelected: [...newSelectedItem],
        ...sumItem(state.itemSelected),
      };
    case "Increase":
      const InfexI = state.itemSelected.findIndex(
        (item) => item.id === action.payload.id
      );
      state.itemSelected[InfexI].quantity++;
      return {
        ...state,
        ...sumItem(state.itemSelected),
      };
    case "Decrease":
      const IndexD = state.itemSelected.findIndex(
        (item) => item.id === action.payload.id
      );
      state.itemSelected[IndexD].quantity--;
      return {
        ...state,
        ...sumItem(state.itemSelected),
      };
    case "CheckOut":
      return {
        itemSelected: [],
        itemCounter: 0,
        total: 0,
        isCheckOut: true,
      };
    case "Clear":
      return {
        itemSelected: [],
        itemCounter: 0,
        total: 0,
        isCheckOut: false,
      };
    default:
      return state;
  }
};
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
