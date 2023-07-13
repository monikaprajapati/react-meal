import * as React from "react";
import classes from './Checkout.module.css';

type CheckoutProps = {
  onClose: any
};

const Checkout: React.FC<CheckoutProps> = (props: CheckoutProps) => {
  const submitHandler = (event: any) => {
    event.preventDefault();
  } 
  return(
    <>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"/>
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street"/>
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal"/>
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input type="text" id="city"/>
        </div>
        <button type="button" onClick={props.onClose}>Cancel</button>
        <button>Confirm</button>
      </form>
    </>
  );
};

export default Checkout;
