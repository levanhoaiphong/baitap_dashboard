import { actionType } from "../action/types/QuanLyRap"

const stateDefault = {
    heThongRapChieu:[],
    filmDetail:{}
}

const QuanLyRapReducer =(state= stateDefault, {type,payload})=>{
    switch(type){
        case actionType.SET_HE_THONG_RAP:
            state.heThongRapChieu = payload
        case actionType.SET_CHI_TIET_PHIM:
            state.filmDetail = payload
        default:
            return {...state}
    }
}
export default QuanLyRapReducer