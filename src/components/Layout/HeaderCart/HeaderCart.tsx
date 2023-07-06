import * as React from "react";
import classes from "./HeaderCart.module.css";
import CartIcon from "../../CartIcon/CartIcon";
import CartContext from "src/store/cart-content";

type HeaderCartProps = {
  onClick: () => void;
};

const HeaderCart: React.FC<HeaderCartProps> = (props) => {
  const cartCtx = React.useContext(CartContext);
  const [btnHighlighted, setBtnHighlighted] = React.useState(false);
  const numberOfCartItems = cartCtx.items.reduce(
    (sum: any, item: { amount: any }) => sum + item.amount,
    0
  );
  const { items } = cartCtx;
  const buttonClasses = `${classes.button} ${
    btnHighlighted ? classes.bump : ""
  }`;
  React.useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
          {items.length > 0 ? numberOfCartItems : 0}
        </span>
      </button>
    </>
  );
};

export default HeaderCart;
