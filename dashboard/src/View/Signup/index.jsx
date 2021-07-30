import { Button, Container, TextField, Typography } from '@material-ui/core'
import { useFormik } from 'formik';
import React, { Fragment } from 'react';
import useStyle from './style'

export default function Signup() {
	const classes = useStyle()
	const formik = useFormik({
		initialValues:{
			taiKhoan: "",
			matKhau:"",
			hoTen:"",
			email:"",
			soDt:"",
		}
	})
	const handeleSubmit =(e) =>{
		e.preventDefault()
		console.log(formik.values)
	}
	return (
		<Fragment>
				<Typography className="mt-5 mb-5" variant="h3" align="center" color="primary">Đăng ký</Typography>
				<Container maxWidth="sm">
					<form onSubmit={handeleSubmit}>
						<div className={classes.marginBottom}>
						<TextField name="taiKhoan" label="Tài Khoản" variant="outlined" fullWidth onChange={formik.handleChange} />
					</div>
					<div className={classes.marginBottom}>
						<TextField name="matKhau" label="Mật Khẩu" variant="outlined" fullWidth onChange={formik.handleChange}/>
					</div>
					<div className={classes.marginBottom}>
						<TextField name="hoTen" label="Họ Tên" variant="outlined" fullWidth onChange={formik.handleChange}/>
					</div>
					<div className={classes.marginBottom}>
						<TextField name="email" label="Email" variant="outlined" fullWidth onChange={formik.handleChange}/>
					</div>
					<div className={classes.marginBottom}>
						<TextField name="soDt" label="Số Điện Thoại" variant="outlined" fullWidth onChange={formik.handleChange}/>
					</div>
					<div className="text-center">
						<Button type="submit" variant="contained" color="primary">Đăng ký</Button>
					</div>
					</form>
				</Container>
		</Fragment>
	)
}
