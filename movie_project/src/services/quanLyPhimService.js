import { GROUPID } from "../util/Setting/config";
import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService {
  constructor() {
      super();
  }
  layDanhSachBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };
  layDanhSachPhim = () =>{
    return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
  }
}

export const quanLyPhimService = new QuanLyPhimService()