import { Button, Container, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import React, { Fragment } from "react";
import useStyle from "./style";

export default function Signin() {
  const classes = useStyle();

  const formik = useFormik({
	  initialValues:{
		  taiKhoan:"",
		  matKhau:"",
		  maNguoiDung:"",
	  }
  })
  const handleSubmit =(e)=>{
	  e.preventDefault()
	  console.log(formik.values)
  }
  return (
    <Fragment>
      <Typography className="mt-5 mb-5" variant="h3" align="center">
        Đăng nhập
      </Typography>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <div className={classes.marginBotton}>
            <TextField name="taiKhoan" onChange={formik.handleChange} label="Tài Khoản" variant="outlined" fullWidth />
          </div>
          <div className={classes.marginBotton}>
            <TextField name="matKhau" onChange={formik.handleChange} label="Mật Khẩu" variant="outlined" fullWidth />
          </div>
	  <div className="text-center">
		  <Button type="submit" variant="contained" color="primary">Đăng nhập</Button>
	  </div>
        </form>
      </Container>
    </Fragment>
  );
}
