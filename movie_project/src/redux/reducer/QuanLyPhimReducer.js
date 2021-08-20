import { actionType } from "../action/types/QuanLyPhimType";

const stateDefault = {
    arrFilm: [
        {
            maPhim: 1389,
            tenPhim: "Diệp Vấn",
            biDanh: "diep-van",
            trailer: "https://www.youtube.com/embed/lzIkybm47to",
            hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/diep-van_gp01.jpg",
            moTa: "Nhà sư vĩ đại của Trung Quốc",
            maNhom: "GP01",
            ngayKhoiChieu: "2011-11-11T00:00:00",
            danhGia: 9,
            hot: true,
            dangChieu: true,
            sapChieu: true,
        },
    ],
    sapChieu: true,
    dangCHieu: true,
    arrDefault:[],
    
};
const QuanLyPhimReducer = (state = stateDefault, { type, payload }) => {
    switch (type) {
        case actionType.SET_DANH_SACH_PHIM:
            state.arrFilm = payload
            state.arrDefault = state.arrFilm
            return { ...state }
        case actionType.SET_PHIM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu

            state.arrFilm = state.arrDefault.filter(film => film.
                dangChieu === state.dangChieu)
        }
        case actionType.SET_PHIM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu

            state.arrFilm = state.arrDefault.filter(film => film.sapChieu ===
                state.sapChieu)
        }
        default:
            return { ...state }
    }
}
export default QuanLyPhimReducer
