import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationsItem from "./NavigationsItem/NavigationsItem";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationsItem link='/' exact>
        Burger Builder
      </NavigationsItem>
      <NavigationsItem link='/orders'>Orders</NavigationsItem>
    </ul>
  );
};

export default NavigationItems;
