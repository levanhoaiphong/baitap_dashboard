import { Typography, Button } from "@material-ui/core";
import React from "react";
import useStyle from "./style";
import { NavLink } from "react-router-dom";

function SideMenu() {
  const classes = useStyle();
  return (
    <div className={classes.sideMenu}>
      <Typography style={{ padding: "20px 30px", color: "#A9A9A9" }} variant="h5">
        Dashboard
      </Typography>
        {/* <NavLink component={Button} >User Management</NavLink> */}
        <NavLink component={Button} style={{borderRadius:15}} to="/signin">Signin</NavLink>
        <NavLink component={Button} to="/signup">Signup</NavLink>
    </div>
  );
}

export default SideMenu;
