import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationsItem from "./NavigationsItem/NavigationsItem";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationsItem link='/' exact>
        Burger Builder
      </NavigationsItem>
      {props.isAuthenticated ? (
        <NavigationsItem link='/orders'>Orders</NavigationsItem>
      ) : null}
      {!props.isAuthenticated ? (
        <NavigationsItem link='/auth'>Authenticate</NavigationsItem>
      ) : (
        <NavigationsItem link='/logout'>Logout</NavigationsItem>
      )}
    </ul>
  );
};

export default NavigationItems;
