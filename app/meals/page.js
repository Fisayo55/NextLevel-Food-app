import Link from "next/link";
import classes from "../_styles/meal-page.module.css";
import MealsGrid from "../_components/meals/MealsGrid";
import { getMeals } from "../_lib/meals";
import { Suspense } from "react";

import LoadingOut from "./loading-out";

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals , created{" "}
          <span className={classes.highlight}>by you.</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your favorite Recipe. </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<LoadingOut />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
