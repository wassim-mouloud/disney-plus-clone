import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';
function ImageSlider() {
    const settings={
        dots:true,
        slidesToShow:1,
        slidesToScroll:1,
        infinite:true,
        autoplay: true,
        speed: 750,
        autoplaySpeed: 2000,
        cssEase: "linear"
        
    }
  return (
    
        <Carousel {...settings}>
            <Wrap>
                <img src="./images/slider-scale.jpg" />
            </Wrap>
            <Wrap>
                <img src='./images/slider-badag.jpg' />
            </Wrap>
            <Wrap>
                <img src='./images/slider-scales.jpg' />
            </Wrap>
        </Carousel>
    
  )
}


const Carousel=styled(Slider)`
    .slick-list{
        overflow:visible;
    }
    ul li button{
        &::before{
            font-size:12px;
            color:rgb(150, 158, 171);
        }
    }
    li.slick-active button::before{
        color:white;
    }
    button{
        z-index:1;
    }

`
const Wrap=styled.div`
       img{
        height:100%;
        width:100%;
        border-radius:10px;
        border:4px solid transparent;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 /73%) 0px 16px 10px -10px;
        transition-duration:400ms;

        &:hover{
        border:4px solid white;
       }
       }
      
       margin-top:20px;
       transition-duration:1000;
       cursor:pointer;
       
`

export default ImageSlider
