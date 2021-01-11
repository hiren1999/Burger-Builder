import React, { useEffect } from "react";
import Auxs from "../../../hoc/Auxs/Auxs";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  useEffect(() => console.log("[OrderSummary] will update"));
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxs>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed[2]}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button btnType='Danger' clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Auxs>
  );
};

export default OrderSummary;
