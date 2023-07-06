import * as React from "react";
import MealsSummary from "./MealsSummary/MealsSummary";
import AvailableMeals from "./AvailableMeals/AvailableMeals";

type MealsProps = {
  //
};

const Meals: React.FC<MealsProps> = () => {
  return(
    <>
      <MealsSummary/>
      <AvailableMeals/>
    </>
  );
};

export default Meals;
