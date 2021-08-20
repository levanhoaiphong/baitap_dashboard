import { quanLyPhimService } from "../../../services/quanLyPhimService"
import { createAction } from "../createAction"
import { actionType } from "../types/CarouselType"




export const getCarouselAction = (dispatch) =>{
    quanLyPhimService.layDanhSachBanner()
    .then((res)=>{
        dispatch(createAction(actionType.SET_CAROUSEL, res.data.content))
    })
    .catch((err)=>{
        console.log(err)
    })
}