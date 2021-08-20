import React from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCarouselAction } from '../../../../redux/action/CarouselAction';
import "./style.css"

const contentStyle = {
    height: '800px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition:"center",
    backgroundSize:"100%",
    backgroundRepeat:"no-repeat",

}
export default function HomeCarousel(props) {
    const dispatch = useDispatch();
    // Bóc tách phần tử
    const { arrImgCarousel } = useSelector(state => state.CarouselReducer)
    useEffect(()=>{
        dispatch(getCarouselAction)
    },[])
    const renderImgCarousel = () => {
        return arrImgCarousel.map((item, index) => {
            return <div key={index}>
                <div style={{...contentStyle, backgroundImage:`url(${item.hinhAnh})`}}>
                    <img src={item.hinhAnh}  style={{opacity:0}}  alt={item.hinhAnh} />
                </div>
            </div>
        })
    }
    return (
        <Carousel effect="fade">
            {renderImgCarousel()}
        </Carousel>
    )
}
