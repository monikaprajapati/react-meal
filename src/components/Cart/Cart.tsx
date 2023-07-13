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
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [didSubmit, setDidSubmit] = React.useState(false);

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
  const buttonActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
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
  const submitHandler = async (item: any) => {
    setIsSubmitting(true);
    const response = await fetch(
      "https://meal-db-149d8-default-rtdb.firebaseio.com/orders.json", {
        method: 'POST',
        body: JSON.stringify({
          user: item,
          orderedItems: cartCtx.items,
        }),
      }
    );

    console.log(response);
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };
  const cartItemsContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      { isCheckingOut && (
        <Checkout onSubmit={submitHandler} onClose={props.onCloseCart} />
      )}
      {!isCheckingOut && buttonActions}
    </>
  );
  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onCloseCart}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {!isCheckingOut && !didSubmit && cartItemsContent}
      {isCheckingOut && isSubmittingModalContent }
      {!isCheckingOut && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
