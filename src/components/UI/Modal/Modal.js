import React, { memo, useEffect } from "react";
import Auxs from "../../../hoc/Auxs/Auxs";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = (props) => {
  useEffect(() => console.log("[Modal] did update"));
  return (
    <Auxs>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxs>
  );
};
export default memo(
  Modal,
  (prevState, nextState) => prevState.show === nextState.show
);
// export default Modal;
