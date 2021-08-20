import React from "react";
import SideMenu from "../../Component/SideMenu";
import Header from "../../Component/Header"
import useStyle from "./style.js"

export default function Layout(props) {
const classes = useStyle()
  return (
    <div>
      <SideMenu/>
      <div className={classes.homeMain}>
	      <Header/>
      </div>
      {props.children}
    </div>
  );
}
