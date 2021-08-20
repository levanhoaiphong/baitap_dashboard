import { quanLyNguoiDungService } from "../../../services/QuanLyNguoiDung"
import { createAction } from "../createAction"
import { DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType"

export const dangNhapAction = (thongTinDangNhap, callBack) =>{
    return async (dispatch) =>{
        try{
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
            if(result.data.statusCode === 200){
                dispatch(createAction(DANG_NHAP_ACTION, result.data.content))
                callBack()
            }
            console.log('result', result)
        }catch(err){
            console.log(err.response.data)
        }
    }
}