import * as React from "react";
import classes from "./Checkout.module.css";
import useInput from "src/Hooks/useInput";

type CheckoutProps = {
  onClose: any;
  onSubmit: any;
};

const Checkout: React.FC<CheckoutProps> = (props: CheckoutProps) => {
  const validationEmpty = (value: any) => value.trim() !== "";
  const validationFiveDigit = (value: any) => value.trim().length === 5;

  const {
    value: name,
    onChange: handleNameChange,
    onBlur: handleNameBlur,
    isValidInput: isValidName,
    hasError: hasNameError,
  } = useInput(validationEmpty);

  const {
    value: street,
    onChange: handleStreetChange,
    onBlur: handleStreetBlur,
    isValidInput: isValidStreet,
    hasError: hasStreetError,
  } = useInput(validationEmpty);

  const {
    value: city,
    onChange: handleCityChange,
    onBlur: handleCityBlur,
    isValidInput: isValidCity,
    hasError: hasCityError,
  } = useInput(validationEmpty);

  const {
    value: postal,
    onChange: handlePostalChange,
    onBlur: handlePostalBlur,
    isValidInput: isValidPostal,
    hasError: hasPostalError,
  } = useInput(validationFiveDigit);

  const [formValidation, setFormValidation] = React.useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const submitHandler = (event: any) => {
    console.log("submitted");
    event.preventDefault();

    setFormValidation({
      name: hasNameError,
      street: hasStreetError,
      postal: hasPostalError,
      city: hasCityError,
    });

    if (!isValidCity || !isValidPostal || !isValidName || !isValidStreet) {
      return;
    }
    props.onSubmit({
      name,
      street,
      city, 
      postal
    })
  };
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
          />
          {formValidation.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            value={street}
            onChange={handleStreetChange}
            onBlur={handleStreetBlur}
          />
          {formValidation.street && <p>Please enter a valid street!</p>}
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            value={postal}
            onChange={handlePostalChange}
            onBlur={handlePostalBlur}
          />
          {formValidation.postal && <p>Please enter a valid postal!</p>}
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            onBlur={handleCityBlur}
          />
          {formValidation.city && <p>Please enter a valid city!</p>}
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onClose}>
            Cancel
          </button>
          <button className={classes.submit} >Confirm</button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
