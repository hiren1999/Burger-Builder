import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngredient.module.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon}></div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
// import PropTypes from "prop-types";
// import React from "react";
// import Styles from "./BurgerIngredient.module.css";

// const BurgerIngredient = (props) => {
//   let ingredient = null;
//   switch (props.type) {
//     case "bread-bottom":
//       ingredient = <div className={Styles.BreadBottom}> </div>;
//       break;
//     case "bread-top":
//       ingredient = (
//         <div className={Styles.BreadTop}>
//           <div className={Styles.Seeds1}></div>
//           <div className={Styles.Seeds2}></div>
//         </div>
//       );
//       break;
//     case "meat":
//       ingredient = <div className={Styles.Meat}></div>;
//       break;
//     case "cheese":
//       ingredient = <div className={Styles.Cheese}></div>;
//       break;
//     case "bacon":
//       ingredient = <div className={Styles.Bacon}></div>;
//       break;
//     case "salad":
//       ingredient = <div className={Styles.Salad}></div>;
//       break;
//     default:
//       ingredient = null;
//   }
//   return ingredient;
// };

// BurgerIngredient.propTypes = {
//   type: PropTypes.string.isRequired,
// };

// export default BurgerIngredient;
