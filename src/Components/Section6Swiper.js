import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card , CardGroup,ListGroup,ListGroupItem} from "react-bootstrap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section5Swipper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Section5Swiper() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <CardGroup>
  

<div className="shop-essentails">
  <div className="all-essentials">
    <div className="image-box">
      <img className="_image" src="../../images/E-iphone.webp" alt="Erro"></img>
    </div>
    <div className="title-box">
      <span className="title1">Best Brands </span>
      <div>
      <a className="after-title1" href="#"> Shop Now</a>
      </div>
    <a className="after-title1-desc" href="#">For All iphone models</a>
    </div>

  </div>
  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/E-camera.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title1">Top 20 Cameras</span>
      <div>
      <a className="after-title1" href="#"> from  ₹3,999</a>
      </div>
    <a className="after-title1-desc" href="#"> Mens Sneakers! </a>
    </div>

  </div>
  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/E-router.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title1">Router </span>
      <div>
      <a className="after-title1" href="#"> From ₹799 </a>
      </div>
    <a className="after-title1-desc" href="#"> MI, Netgear, TP-Link & more</a>
    </div>

  </div>

  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/E-laptop.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title1">Lenovo Ideapad Duet Chrom.. </span>
      <div>
      <a className="after-title1" href="#"> Up to 60% off </a>
      </div>
    <a className="after-title1-desc" href="#"> Casual Shoes, Sneakers...! </a>
    </div>


  </div>
  
</div>


</CardGroup>
        </SwiperSlide>
        <SwiperSlide>

        <CardGroup>
  
 <div className="shop-essentails">
  <div className="all-essentials">
    <div className="image-box">
      <img className="_image" src="../../images/E-logitech.webp" alt="Erro"></img>
    </div>
    <div className="title-box">
      <span className="title1">WebCams </span>
      <div>
      <a className="after-title1" href="#"> From ₹499 </a>
      </div>
    <a className="after-title1-desc" href="#"> Logitech , Quantum </a>
    </div>

  </div>
  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/NikeShoes1.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title1">Nike</span>
      <div>
      <a className="after-title1" href="#"> Upto 50% off</a>
      </div>
    <a className="after-title1-desc" href="#"> Basketball Shoes </a>
    </div>

  </div>
  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/FashionJwellery.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title1">Fashion Jewellery</span>
      <div>
      <a className="after-title1" href="#"> from ₹99 </a>
      </div>
    <a className="after-title1-desc" href="#"> Best Sellers@Lowest Price  </a>
    </div>

  </div>

  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/PumaWhiteShoes.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title1">Puma</span>
      <div>
      <a className="after-title1" href="#"> 40-70% off </a>
      </div>
    <a className="after-title1-desc" href="#"> Men's FootWear </a>
    </div>


  </div>
  
</div>


</CardGroup>

        </SwiperSlide>
        <SwiperSlide>
        <CardGroup>
        <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Kitchen-img.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title1">Kitchen and Dining Essentials</span>
      <div>
      <a className="after-title1" href="#"> From ₹199 </a>
      </div>
    <a className="after-title1-desc" href="#"> Best Discounts! </a>
    </div>

    </div>
    
    </CardGroup>
       
          
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}