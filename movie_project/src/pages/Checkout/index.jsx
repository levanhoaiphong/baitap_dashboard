import { Button, Container, Grid, Typography } from "@material-ui/core";
import _ from "lodash";
import React from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../redux/action/createAction";
import { layChiTietPhongVeAction } from "../../redux/action/QuanLyDatVeAction";
import { DAT_VE } from "../../redux/action/types/QuanLyDatVe";
import useStyle from "./style";

export default function Checkout(props) {
  const classes = useStyle();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const action = layChiTietPhongVeAction(props.match.params.id);
    dispatch(action);
  }, []);
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  const handleSubmit = (ghe) => {
    return ()=>{
        dispatch(createAction(DAT_VE, ghe));
    }
  };
  const renderSeats = () => {
    const { gheDangDat, gheDaDat, gheVip } = classes;
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? `${gheVip}` : "";
      let classGheDaDat = ghe.daDat === true ? `${gheDaDat}` : "";
      let classGheDangDat = "";
      // Kiểm tra từng ghế render xem có trong mảng ghế đang đặt
      // hay không
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (indexGheDD != -1) {
        classGheDaDat = `${gheDangDat}`;
      }
      return (
        <Fragment key={index}>
          <button
            onClick={handleSubmit(ghe)}
            disabled={ghe.daDat}
            className={`${classes.ghe} ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
          >
            {ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Grid container spacing={3}>
        <Grid item md={9}>
          <div
            className="bg-dark"
            style={{ width: "80%", height: "25px", margin: "0 auto" }}
          ></div>
          <div className={classes.trapezoid}>
            <Typography color="primary" className="mt-3">
              Màn hình
            </Typography>
          </div>
          <div className="mt-5">{renderSeats()}</div>
        </Grid>
        <Grid item md={3}>
          <Typography variant="h5" component="h4" align="center">
            <Typography>
              Giá:{" "}
              {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)}
              đ
            </Typography>
          </Typography>
          <hr />
          <Typography variant="h5" component="h4">
            {thongTinPhim.tenPhim}
          </Typography>
          <Typography variant="body">
            {thongTinPhim.tenCumRap}- {thongTinPhim.tenRap} <br /> Ngày chiếu:{" "}
            {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
          </Typography>
          <hr />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography>
              Ghế:
              {_.sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                return (
                  <span style={{ color: "green" }} className="ml-1">
                    {gheDD.stt}
                  </span>
                );
              })}
            </Typography>

            <Typography>
              Giá:{" "}
              {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)}
            </Typography>
          </div>
          <hr />
          <div className="mb-3">
            <i>Eamil</i> <br />
            {userLogin.email}
          </div>
          <div>
            <i>Phone</i> <br />
            {userLogin.soDT}
          </div>
          <div
            style={{
              height: "40%",
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            <Button variant="contained">Đặt vé</Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
