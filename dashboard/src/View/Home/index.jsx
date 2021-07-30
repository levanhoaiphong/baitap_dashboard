import React from "react";
import Header from "../../Component/Header";
import SideMenu from "../../Component/SideMenu";
import useStyle from "./style";

export default function Home() {
  const classes = useStyle();
  return (
    <>
      <SideMenu />
      <div
        className={classes.homeMain}
      >
        <Header />
       
      </div>
    </>
  );
}
