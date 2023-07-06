import * as React from "react";
import classes from './CartItem.module.css';

type CartItemProps = {
  cartItem: any,
  onRemove: () => void,
  onAdd: () => void
};

const CartItem: React.FC<CartItemProps> = (props) => {
  const price = `$${props.cartItem.price.toFixed(2)}`;
  return (
    <li className={classes['cart-item']}>
    <div>
      <h2>{props.cartItem.name}</h2>
      <div className={classes.summary}>
        <span className={classes.price}>{price}</span>
        <span className={classes.amount}>x {props.cartItem.amount}</span>
      </div>
    </div>
    <div className={classes.actions}>
      <button onClick={props.onRemove}>−</button>
      <button onClick={props.onAdd}>+</button>
    </div>
  </li>
  );
};

export default CartItem;
