import React from "react";
import Auxs from "../../hoc/Auxs";
import classes from "./Layout.module.css";

const Layout = (props) => (
  <Auxs>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxs>
);

export default Layout;
