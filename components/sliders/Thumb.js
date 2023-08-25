import { useState } from "react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Thumbs]);

const ThumbSlider = ({ imageOne,imageTwo }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                
                spaceBetween={10}
                navigation={true}
                
                className="mySwiper2"
            >
           
                    <SwiperSlide>
                        <img src={imageOne} alt="img" />
                         
                    </SwiperSlide>
                    {imageTwo.length >=0 &&  (
                      <SwiperSlide>
                      <img src={imageTwo} alt="img" />
                      </SwiperSlide>
                    )}
                   
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper"
            >
             
                    <SwiperSlide>
                        <img src={imageOne} alt="img" />
                    </SwiperSlide>
                    {imageTwo.length >=0 && (
                        <SwiperSlide>
                        <img src={imageTwo} alt="img" />
                       </SwiperSlide>
                    )}
                    
         
            </Swiper>
        </div>
    );
};

export default ThumbSlider;
