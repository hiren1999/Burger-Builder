import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
  console.log(props, "props");
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}>
        Less
      </button>
      <button
        className={classes.More}
        onClick={console.log(props.added, "adddeddd")}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
