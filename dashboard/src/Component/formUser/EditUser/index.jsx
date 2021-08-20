import React, { Fragment } from "react";
import { Button, Container, TextField, Typography, FormControl, Select,MenuItem} from "@material-ui/core";
import useStyle from "./style";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

export default function FormUser() {
  const classes = useStyle();
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP1",
      maLoaiNguoiDung: "",
    },
  });

  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(formik.values)
      dispatch
  }
  return (
    <Fragment>
      <Typography className="mt-4 mb-4" variant="h3" align="center">
        Add User
      </Typography>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <div className={classes.marginForm}>
            <TextField
              name="hoTen"
              label="Họ Tên"
              variant="outlined"
              fullWidth
              value={formik.values.hoTen}
              onChange={formik.handleChange}
            />
          </div>
          <div className={classes.marginForm}>
            <TextField
              name="taiKhoan"
              label="Tài Khoản"
              variant="outlined"
              fullWidth
              value={formik.values.taiKhoan}
              onChange={formik.handleChange}
            />
          </div>
          <div className={classes.marginForm}>
            <TextField label="Email" name="email" value={formik.values.email}
              onChange={formik.handleChange} variant="outlined" fullWidth />
          </div>
          <div className={classes.marginForm}>
            <TextField label="Số Điện Thoại" name="soDt" value={formik.values.soDt}
              onChange={formik.handleChange} variant="outlined" fullWidth />
          </div>
          <div>
            <FormControl fullWidth className={classes.formControl}>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                displayEmpty
                name="maLoaiNguoiDung"
                value={formik.values.maLoaiNguoiDung}
                onChange={formik.handleChange}  
              >
                <MenuItem value="KhachHang">Khách Hàng</MenuItem>
                <MenuItem value="QuanTri">Quản Trị</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="text-center mt-5">
            <Button type="submit" variant="contained" color="primary">
              Add User
            </Button>
          </div>
        </form>
      </Container>
    </Fragment>
  );
}
