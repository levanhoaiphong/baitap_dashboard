import {
  TextField,
  Typography,
  Grid,
  CssBaseline,
  Avatar,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Paper,
  Container
} from "@material-ui/core";
import React from "react";
import { LockOutlinedIcon } from "@material-ui/icons/LockOutlined";
import { useFormik } from "formik";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/action/QuanLyNguoiDungAction";


export default function Signin() {
  const dispatch = useDispatch()
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    }
  })

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(dangNhapAction(formik.values, goToHome))
    console.log(formik.values)
  }
  const goToHome =()=>{
    history.push("/")
  }
  return (
    <>
      <Typography align="center" variant="h4" className="mt-4 mb-4">Sign in</Typography>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <div>
            <TextField name="taiKhoan" value={formik.values.taiKhoan} onChange={formik.handleChange} label="Tài khoản" margin="normal"
              required variant="outlined" fullWidth />
          </div>
          <div>
            <TextField name="matKhau" value={formik.values.matKhau} onChange={formik.handleChange}  label="Mật khẩu" margin="normal"
              required variant="outlined" fullWidth />
          </div>
          <div>
            <Button type="submit" variant="contained">Đăng nhập</Button>
          </div>
        </form>
        <div>
          <Typography>Bạn chưa có tài khoản ? <NavLink to="/register" color="secondary" component={Button}>Đăng ký</NavLink></Typography>
        </div>
      </Container>
    </>
  );
}
