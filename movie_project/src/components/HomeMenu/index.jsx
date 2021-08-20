import React, { Fragment } from "react";
import { useState } from "react";
import { Button, Tabs } from "antd";
import useStyle from "./style";
import { Container,Grid } from "@material-ui/core";
import { useEffect } from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;
function HomeMenu(props) {
  const [state, setState] = useState({
    tabPosition: "left",
  });
  const classes = useStyle();

  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };

  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const { tabPosition } = state;
  const renderHeThongRap = () => {
    return heThongRapChieu?.map((heThongRap, index) => {
      return (
        <TabPane
          tab={<img src={heThongRap.logo} className={classes.radius} />}
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: 300, display: "flex" }}>
                      <img
                        src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                        width="50"
                      />
                      <div className="ml-2">
                        {cumRap.tenCumRap}
                        <p className="text-danger">Chi tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim.map((movie, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="mt-2">
                          <div style={{ display: "flex" }}>
                            <img
                              src={movie.hinhAnh}
                              alt={movie.tenPhim}
                              width="100"
                              height="100"
                              onError={(e)=>{e.target.onerror = null; e.target.src="https://picsum.photos/200"}}
                            />
                            <div className="ml-3">
                              <h4 className="text-gray">{movie.tenPhim}</h4>
                              <p>{cumRap.diaChi}</p>

                               <Grid container >
                                  <Grid item md={12} >
                                   {movie.lstLichChieuTheoPhim?.slice(0,12).map((lichChieu, index) => {
                                return <NavLink component={Button} className="ml-4 mt-2"  to="/" key={index}>
                                  {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                </NavLink>
                              })}
                                </Grid>
                               </Grid>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <Container>
      <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
    </Container>
  );
}
export default memo(HomeMenu);
