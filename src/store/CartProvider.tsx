import React, { useReducer } from "react";
import CartContext from "./cart-content";

const defaultCartState = {
  items: [] as any,
  totalAmount: 0,
};
const cartReducer = (state: any, action: any) => {
  if (action.type === "Add") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    const existItemIndex = state.items.findIndex(
      (item: { id: any }) => item.id === action.payload.id
    );
    const existItem = state.items[existItemIndex];
    let updatedItems;
    if (existItem) {
      const updatedItem = {
        ...existItem,
        amount: existItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "Remove") {
    const existItemIndex = state.items.findIndex(
      (item: { id: any }) => item.id === action.id
    );
    const existItem = state.items[existItemIndex];
    const updatedTotalAmount = state.totalAmount - existItem.price;
    let updatedItems;

    if (+existItem.amount === 1) {
      updatedItems = state.items.filter(
        (item: { id: any }) => item.id !== action.id
      );
    } else {
      const updatedItem = {
        ...existItem,
        amount: existItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else {
    return defaultCartState;
  }
};

export const CartProvider = (props: any) => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState);
  const addItemHandler = (item: any) => {
    dispatch({ type: "Add", payload: item });
  };
  const removeItemHandler = (id: string) => {
    dispatch({ type: "Remove", id: id });
  };
  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};
