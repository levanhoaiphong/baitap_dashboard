import { quanLyRapServices } from "../../../services/QuanLyRapServeces"
import { createAction } from "../createAction"
import { actionType } from "../types/QuanLyRap"


export const layDanhSachCumRapAction  = ()=>{
    return (dispatch) =>{
    quanLyRapServices.layDanhSachHeThongRap()
    .then((res)=>{
        dispatch(createAction(actionType.SET_HE_THONG_RAP, res.data.content))
    })
    .catch((err)=>{
        console.log(err)
    })
    }
}

export const layThongTinChiTietPhim = (id) =>{
    return (dispatch) =>{
        quanLyRapServices.layThongTinLichChieuPhim(id)
        .then((res) =>{
            console.log(res.data)
            dispatch(createAction(actionType.SET_CHI_TIET_PHIM, res.data.content))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}   