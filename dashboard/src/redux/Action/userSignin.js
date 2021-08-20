import axios from "axios";
import { request } from "../../API/request";
import { createAction } from "./createAction";
import { actionType } from "./type";



export const signIn = (user,callBack) => {
	return (dispatch) => {
		axios({
			url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
			method:"POST",
			data: user
		})
		.then((res)=>{
			if(res.data.maLoaiNguoiDung === "QuanTri"){
				dispatch(createAction(actionType.SET_SIGNIN, res.data))
			}else{
				alert("Tài khoản không được quyền truy cập")
			}
			if(res.data.accessToken){
				localStorage.setItem("t", JSON.stringify(res.data))
			}
		
			callBack()
		})
		.catch((err)=>{
			console.log(err)
		})
	}
}


export const fetchUserList = (page)=>{
	return (dispatch) =>{
		request({
			url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01",
			method:"GET",
			params:{
				soTrang:page,
				soPhanTuTrenTrang:20,
			},
		})
		.then((res)=>{
			dispatch(createAction(actionType.SET_USER, res.data))
		})
		.catch((err)=>{
			console.log(err)
		})
	}
}

export const addUser = (user, callBack) =>{
	return (dispatch) =>{
		request({
			url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
			method: "POST",
			data:user,
			headers:{
				Authorization: "Bearer " + localStorage.getItem("t")
			}
		})
		.then((res) =>{
			console.log(res.data)
			callBack()
		})
		.catch((err)=>{
			console.log(err)
		})
	}
}