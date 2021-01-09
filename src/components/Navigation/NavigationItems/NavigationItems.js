import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationsItem from "./NavigationsItem/NavigationsItem";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationsItem link="/" active>
        Burger Builder
      </NavigationsItem>
      <NavigationsItem link="/">Checkout</NavigationsItem>
    </ul>
  );
};

export default NavigationItems;
