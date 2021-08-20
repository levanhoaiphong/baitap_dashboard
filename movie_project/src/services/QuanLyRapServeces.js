import { GROUPID } from "../util/Setting/config";
import { baseService } from "./baseService";

export class QuanLyRapService extends baseService {
  constructor() {
      super();
  }
  layDanhSachHeThongRap = () => {
    return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
  };
  layThongTinLichChieuPhim = (maPhim) =>{
    return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  }
}

export const quanLyRapServices = new QuanLyRapService()