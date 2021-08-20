import { Button, Container } from "@material-ui/core";
import React from "react";
import HomeMenu from "../../components/HomeMenu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MultipleRowsSlick from "../../components/ReactSlick/MultipleRowSlick";
import { useEffect } from "react";
import { getMovieList } from "../../redux/action/QuanLyPhimAction";
import { layDanhSachCumRapAction } from "../../redux/action/QuanLyRapAction";
import { memo } from "react";
import HomeCarousel from "../../template/HomeTemplate/Layout/HomeCarousel";


function Home(props) {
  const [state, setState] = useState({ tabPosition: "top" });
  const dispatch = useDispatch()

  const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)
  const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer)
  useEffect(()=>{
    dispatch(getMovieList())
    dispatch(layDanhSachCumRapAction())
  },[])
  return (
    <>
    <HomeCarousel/>
      <Container>
              <MultipleRowsSlick arrFilm={arrFilm}/>
      </Container>
      <HomeMenu heThongRapChieu={heThongRapChieu}/>
    </>
  );
}
export default memo(Home)