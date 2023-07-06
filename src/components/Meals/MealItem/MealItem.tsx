import * as React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";
import CartContext from "src/store/cart-content";

type MealItemProps = {
  meal: { id: string, name: string; description: string; price: number };
};

const MealItem: React.FC<MealItemProps> = (props) => {
  const cartCtx = React.useContext(CartContext);
  const addItemToCartHandler = (amount: any) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price
    });
  }
  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{props.meal.name}</h3>
          <div className={classes.description}>{props.meal.description}</div>
          <div className={classes.price}>{props.meal.price}</div>
        </div>
        <div>
          <MealItemForm id={props.meal.id} name={props.meal.name} onAddItemToCart={addItemToCartHandler}/>
        </div>
      </li>
    </>
  );
};

export default MealItem;
