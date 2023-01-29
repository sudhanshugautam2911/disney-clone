import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const ImgSlider = () => {

    let settings = {
        dots: true,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="./images/slider-badag.jpg" alt="Sliding Image" />
            </Wrap>
            <Wrap>
                <img src="./images/slider-badging.jpg" alt="Sliding Image" />
            </Wrap>
            <Wrap>
                <img src="./images/slider-scale.jpg" alt="Sliding Image" />
            </Wrap>
            <Wrap>
                <img src="./images/slider-scales.jpg" alt="Sliding Image" />
            </Wrap>
            
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`

/* complete div of slider  */

    margin-top: 20px;
    
    /* slider Next Button at the bottom*/
    ul li button {
        &:before {
            font-size:10px;
            color: rgb(150, 158,171);
        }
    }
    
    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
    
`
const Wrap = styled.div`

/* img inside the slider */
    cursor: pointer;
    
    img {
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0 16px 10px -10px;
        transition-duration: 300ms;
        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8)
        }
    }
`