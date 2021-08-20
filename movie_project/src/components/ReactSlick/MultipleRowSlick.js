import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { actionType } from "../../redux/action/types/QuanLyPhimType";
import Movie from "../Movie";
import styleClick from "./MultipleRow.module.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleClick["slick-prev"]}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleClick["slick-next"]}`}
            style={{ ...style, left: "-50px", display: "block" }}
            onClick={onClick}
        />
    );
}

const MultipleRowsSlick = (props) => {
    const dispatch = useDispatch()
    const {sapChieu, dangChieu} = useSelector(state => state.QuanLyPhimReducer)
    const renderMovie = () => {
        return props.arrFilm.slice(0, 12).map((item, index) => {
            return (
                <div className={`${styleClick["width-item"]}`} key={index}>
                    <Movie movie={item} />
                </div>
            );
        });
    };

    let activeClassDC = dangChieu===true ? 'active' : 'none-active';
    let activeClassSC = sapChieu===true ? 'active' : 'none-active';
    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "245px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        variableWidth: true,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    rows: 2,
                    slidesToScroll: 3,
                    initialSlide: 0,
                },
            },
        ],
    };

    return (
        <div className="mt-5 mb-4">
            <div className="text-center mb-5">
                <Button onClick={() => {
                const action = { type: actionType.SET_PHIM_DANG_CHIEU }
                dispatch(action)
            }} className={`${styleClick[activeClassDC]} mr-2`} variant="contained" >Đang chiếu</Button>
            <Button onClick={() => {
                const action = { type: actionType.SET_PHIM_SAP_CHIEU }
                dispatch(action)
            }} className={`${styleClick[activeClassSC]}`} variant="contained" >Sắp chiếu</Button>
            </div>
            <Slider {...settings}>{renderMovie()}</Slider>
        </div>
    );
}

export default MultipleRowsSlick