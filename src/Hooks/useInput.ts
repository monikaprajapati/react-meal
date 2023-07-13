import React, { useState } from "react";

const useInput = (validationHandle: any) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(true);

  let hasError = false;

  let isValidInput = validationHandle(enteredValue);

  if (!isValidInput && isTouched) {
    hasError = true;
  }
  console.log("error ?? ", hasError);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("change");
    setEnteredValue(e.target.value);
  };

  const handleBlur = () => {
    console.log("blur");
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isValidInput,
    hasError,
    onChange: handleChange,
    onBlur: handleBlur,
  };
};

export default useInput;
