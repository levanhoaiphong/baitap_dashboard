import React from "react";
import { Button, AppBar, Toolbar, Container } from "@material-ui/core";
import useStyle from './style'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header(props) {
  const classes = useStyle()
  const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)
  return (
    <div className={classes.root}>
      <AppBar position="static">
      <Container>
        <Toolbar>
         <div className={classes.title} > 
            <img className={classes.img} src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="" />
         </div>
          <div className={classes.title} >
           <Button>Lịch chiếu</Button>
           <Button>Cụm rạp</Button>
           <NavLink component={Button} className="mr-3" to="/news">Tin tức</NavLink>
           <NavLink component={Button} to="/contact">Ứng dụng</NavLink>
          </div>
          {userLogin ? <div style={{color:"black"}}>Hello, {userLogin.hoTen}</div> : <><NavLink to="/signin" color="default">Sign in</NavLink>
          <Button color="default">Sign up</Button></>}
        </Toolbar>
     </Container>
      </AppBar>
    </div>
  );
}
