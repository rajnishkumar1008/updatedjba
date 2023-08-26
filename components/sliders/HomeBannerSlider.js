import Link from "next/link";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

const HomeBannerSlider = ({banner}) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                
                pagination={true}
                navigation={{
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
            >
                {banner && banner.map((item, i) => (
                <SwiperSlide key={i}>
                    <div className="single-hero-slider single-animation-wrap">
                        <Link href="/products">
                        <Image
                        src={item.banner_url}
                        alt="Jews By Annu |Jewelery"
                        width={1495}
                        height={503}
                      />
                     </Link>
                    </div>
                </SwiperSlide>
                 ))}
            </Swiper>
            
            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
                <i className="bi bi-chevron-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i1">
                <i className="bi bi-chevron-right"></i>
                </span>
            </div>
        </>
    );
};

 

export default HomeBannerSlider;
