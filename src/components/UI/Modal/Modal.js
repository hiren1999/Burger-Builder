import React, { Component } from "react";
import Auxs from "../../../hoc/Auxs/Auxs";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentDidUpdate() {
    console.log("[Modal] WillUpdate");
  }

  render() {
    return (
      <Auxs>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}>
          {this.props.children}
        </div>
      </Auxs>
    );
  }
}

export default Modal;
// import React, { memo, useEffect } from "react";
// import Auxs from "../../../hoc/Auxs/Auxs";
// import Backdrop from "../Backdrop/Backdrop";
// import classes from "./Modal.module.css";

// const Modal = (props) => {
//   console.log("modal props", props);
//   useEffect(() => console.log("[Modal] did update"));
//   return (
//     <Auxs>
//       <Backdrop show={props.show} clicked={props.modalClosed} />
//       <div
//         className={classes.Modal}
//         style={{
//           transform: props.show ? "translateY(0)" : "translateY(-100vh)",
//           opacity: props.show ? "1" : "0",
//         }}>
//         {props.children}
//       </div>
//     </Auxs>
//   );
// };
// export default memo(
//   Modal,
//   (prevState, nextState) => prevState.show === nextState.show
// );
