import { quanLyPhimService } from "../../../services/quanLyPhimService"
import { createAction } from "../createAction"
import { actionType } from "../types/QuanLyPhimType"


export const getMovieList =()=>{
    return (dispatch) =>{
        quanLyPhimService.layDanhSachPhim()
    .then((res)=>{
        dispatch(createAction(actionType.SET_DANH_SACH_PHIM, res.data.content))
    })
    .catch((err)=>{
        console.log(err)
    })
    }
}