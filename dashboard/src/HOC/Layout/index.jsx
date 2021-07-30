import React from "react";
import SideMenu from "../../Component/SideMenu";
import Header from "../../Component/Header"

export default function Layout(props) {
  return (
    <div>
      <SideMenu/>
      <div style={{width:"100%"}}>
	      <Header/>
      </div>
      {props.children}
    </div>
  );
}
