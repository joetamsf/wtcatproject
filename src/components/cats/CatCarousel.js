import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Navigation, Thumbs } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
// import { Row, Col } from 'reactstrap';



const CatCarousel = (props) => {
    const [ thumbsSwiper, setThumbsSwiper ] = useState(null);
    const { imgFolder, imgs, thumbs } = props.cat;
    
    return (
        <>
            <Swiper
                style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff"
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null  }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2" 
            >
                {
                    imgs.map((img,index) => {
                         return (
                         <SwiperSlide key={index}><img alt={img} src={imgFolder + img} /></SwiperSlide>
                         )
                     })
                }

                </Swiper>
                <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {
                thumbs.map((thumb,index) => {
                    return (
                        <SwiperSlide key={index}><img alt={thumb} src={imgFolder + thumb} /></SwiperSlide>
                    )
                })
                }
                </Swiper>
        </>
    )
};

export default CatCarousel;