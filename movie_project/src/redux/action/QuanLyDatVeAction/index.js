import { quanLyDatVeService } from "../../../services/QuanLyDatVeService"
import { createAction } from "../createAction";
import { QUAN_LY_DAT_VE_ACTION } from "../types/QuanLyDatVe";



export const layChiTietPhongVeAction =(maLichChieu) =>{
    return async dispatch =>{
        try{
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
            console.log('result', result)
            if(result.status === 200){
                dispatch(createAction(QUAN_LY_DAT_VE_ACTION, result.data.content))
            }
        }catch(error){
            console.log(error)
        }
    }
}