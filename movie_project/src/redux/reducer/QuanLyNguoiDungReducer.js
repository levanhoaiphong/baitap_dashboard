import { TOKEN, USER_LOGIN } from "../../util/Setting/config"
import { DANG_NHAP_ACTION } from "../action/types/QuanLyNguoiDungType"

let user ={};
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin: user,
}

 const QuanLyNguoiDungReducer = (state= stateDefault, {type, payload}) =>{
    switch(type){
        case DANG_NHAP_ACTION:{
            localStorage.setItem(USER_LOGIN, JSON.stringify(payload))
            localStorage.setItem(TOKEN, payload.accessToken)
        }
        default:
            return {...state}
    }
}
export default QuanLyNguoiDungReducer