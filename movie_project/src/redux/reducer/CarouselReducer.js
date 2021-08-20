import { actionType } from "../action/types/CarouselType"


const stateDefault = {
  arrImgCarousel: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
    },
  ]
}


const CarouselReducer = (state = stateDefault, { type, payload }) => {
  switch (type) {
    case actionType.SET_CAROUSEL:
      state.arrImgCarousel = payload
      return {...state}
    default:
      return { ...state }
  }
}
export default CarouselReducer