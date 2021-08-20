import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe"
import { DAT_VE, QUAN_LY_DAT_VE_ACTION } from "../action/types/QuanLyDatVe"


const stateDefault ={
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: [{maGhe: 47437, tenGhe: "37", maRap: 451, loaiGhe: "Vip", stt: "37"}]
}

 const QuanLyDatVeReducer = (state=stateDefault, {type,payload})=>{
    switch(type){
        case QUAN_LY_DAT_VE_ACTION:
            state.chiTietPhongVe = payload
            return {...state}
        case DAT_VE:
            let danhSachGheCapNhap = [...state.danhSachGheDangDat]
            let index = danhSachGheCapNhap.findIndex(gheDD =>gheDD.maGhe === payload.maGhe)
            if(index != -1){
                // Nếu tìm thấy ghế được chọn trong mảng
                // có nghĩa là trước đó đã click vào rồi 
                // => xóa đi
                danhSachGheCapNhap.splice(index, 1); 
            }else{
                danhSachGheCapNhap.push(payload)
            }
            console.log(payload)
            return {...state, danhSachGheDangDat:danhSachGheCapNhap}
        default:
            return {...state}
    }
}
export default QuanLyDatVeReducer