import React from "react";

const CartContext = React.createContext({
  items: [] as any,
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id: string) => {},
  clearCart: () => {}
});

export default CartContext;
