import { Fragment } from "react";
import AvailavleMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailavleMeals />
    </Fragment>
  );
};

export default Meals;
