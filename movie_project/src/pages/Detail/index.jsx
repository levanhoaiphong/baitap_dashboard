import React, { useState } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { Container, Grid , Button} from "@material-ui/core";
import { Typography } from "antd";
import "../../assets/styles/circle.scss";
import { Tabs} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { layThongTinChiTietPhim } from "../../redux/action/QuanLyRapAction";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

export default function Detail(props) {
    const [state, setState] = useState({
        tabPosition: "left",
    });
    const dispatch = useDispatch();
    const { filmDetail } = useSelector((state) => state.QuanLyRapReducer);
    useEffect(() => {
        let { id } = props.match.params;
        dispatch(layThongTinChiTietPhim(id));
    }, []);
    const { tabPosition } = state;
    return (
        <div
            style={{
                backgroundImage: `url(${filmDetail.hinhAnh})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                minHeight: "100vh",
                backgroundRepeat: "no-repeat",
            }}
        >
            <CustomCard
                style={{ paddingTop: 200, minHeight: "100vh" }}
                effectColor="#fff" // required
                color="#fff" // default color is white
                blur={15} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item md={3} spacing={0}>
                            <img src={filmDetail.hinhAnh} width="250" alt="" />
                        </Grid>
                        <Grid item md={6}>
                            <Typography className="text-white">Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</Typography>
                            <Typography className="text-white" component="h2">Tên phim: {filmDetail.tenPhim}</Typography>
                            <Typography className="text-white" component="h5">Mô tả: {filmDetail.moTa}</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <div class="inner-content text-center">
                                <div class="c100 p75 big center orange">
                                    <span>8.8</span>
                                    <div class="slice">
                                        <div class="bar"></div>
                                        <div class="fill"></div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="mt-5 bg-white">
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab="Lịch chiếu" key="1">
                                <Tabs tabPosition={tabPosition}>
                                    {filmDetail.heThongRapChieu?.map((htr, index) => {
                                        return <TabPane tab={<div><img src={htr.logo} className="mr-3" width="50" height="50" />{htr.tenHeThongRap}</div>} key={index}>
                                            {htr.cumRapChieu?.map((cumRap, index) => {
                                                return <div key={index}>
                                                    <div style={{ display: "flex" }}>
                                                        <img src= {cumRap.hinhAnh} width="50" />
                                                        <div className="ml-2">
                                                            <Typography component="h6">{cumRap.tenCumRap}</Typography>
                                                            <Typography component="body">{cumRap.diaChi}</Typography>
                                                        </div>
                                                    </div>
                                                        <Grid container className="mb-5">
                                                            <Grid item md={12}>
                                                    {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu, index) => {
                                                        return <NavLink  component={Button} className="ml-3 mt-2 " to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh.mm.A')}
                                                                </NavLink>
                                                    })}
                                                    </Grid>
                                                    </Grid>
                                                </div>
                                            })}
                                        </TabPane>
                                    })}

                                </Tabs>
                            </TabPane>
                            <TabPane tab="Thông tin" key="2">
                                Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Đánh giá" key="3">
                                Content of Tab Pane 3
                            </TabPane>
                        </Tabs>

                    </div>
                </Container>
            </CustomCard>
        </div>
    );
}
