import * as React from "react";
import classes from "./MealItemForm.module.css";
import Input from "src/components/UI/Input/Input";

const MealItemForm = (props) => {
  const inputRef = React.useRef();
  const [error, setError] = React.useState({
    content: "",
    errorStatus: false,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +inputRef.current.value;
    if (enteredAmount.length === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setError({
        content: "Please enter a valid amount(1-5).",
        errorStatus: true,
      });
      return;
    } else {
      setError({
        content: "",
        errorStatus: false,
      });
    }
    props.onAddItemToCart(enteredAmount);
  };
  return (
    <>
      <form className={classes.form}>
        <Input
          ref={inputRef}
          label={"Amount"}
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button type="submit" onClick={submitHandler}>
          + Add{" "}
        </button>
        {error.errorStatus && <p>{error.content}</p>}
      </form>
    </>
  );
};

export default MealItemForm;
