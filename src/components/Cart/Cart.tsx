import * as React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "src/store/cart-content";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout";

type CartProps = {
  onCloseCart: () => void;
};

const Cart: React.FC<CartProps> = (props) => {
  const [isCheckingOut, setCheckingOut] = React.useState(false);
  const cartCtx = React.useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const removeItemHandler = (id: string) => {
    cartCtx.removeItem(id);
  };
  const addItemHandler = (item: any) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setCheckingOut(true);
  };
  const buttonActions = <div className={classes.actions}>
  <button className={classes["button-alt"]} onClick={props.onCloseCart}>
    Close
  </button>
  {hasItems && (
    <button className={classes.button} onClick={orderHandler}>
      Order
    </button>
  )}
</div>;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item: any) => (
        <CartItem
          key={item.id}
          cartItem={item}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      {isCheckingOut && <Checkout onClose={props.onCloseCart}/>}
      {!isCheckingOut && buttonActions}
    </Modal>
  );
};

export default Cart;
