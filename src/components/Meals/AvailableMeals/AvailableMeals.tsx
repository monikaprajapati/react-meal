import React, { useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";

type AvailableMealsProps = {};

const AvailableMeals: React.FC<AvailableMealsProps> = () => {
  const [meals, setMeals] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://meal-db-149d8-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData: any = await response.json();

      const loadedItems = [];

      for (let key in responseData) {
        loadedItems.push({
          id: key,
          name: responseData[key].name,
          amount: responseData[key].amount,
          price: responseData[key].price,
        });
      }
      setMeals(loadedItems);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.mealsError}>
        <p>{error}</p>
      </section>
    );
  }
  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>
            {meals.map((meal) => (
              <MealItem meal={meal} key={meal.id} />
            ))}
          </ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
