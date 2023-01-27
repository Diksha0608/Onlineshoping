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
      <img className="_image" src="../../images/Slipper.webp" alt="Erro"></img>
    </div>
    <div className="title-box1">
      <span className="title1">Best Selling Footwear</span>
      <div>
      <a className="after-title1" href="#"> Under ₹149 </a>
      </div>
    <a className="after-title1-desc" href="#"> Sandals Slippers & more</a>
    <div className=" button--add"><button className="btn btn-primary"> Add to Cart</button> </div>
    </div>

  </div>
  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/WhiteShoes.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title1">Best Selling Footwear</span>
      <div>
      <a className="after-title1" href="#"> 30-40% off </a>
      </div>
    <a className="after-title1-desc" href="#"> Mens Sneakers! </a>
    <div className=" button--add"><button className="btn btn-primary"> Add to Cart</button> </div>
    </div>

  </div>
  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Cargos.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title1">Cargos </span>
      <div>
      <a className="after-title1" href="#"> min 50% off </a>
      </div>
    <a className="after-title1-desc" href="#"> Not to be missed! </a>
    <div className=" button--add"><button className="btn btn-primary"> Add to Cart</button> </div>
    </div>

  </div>

  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/BlackShoes.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title1">Season's Best Sellers </span>
      <div>
      <a className="after-title1" href="#"> Up to 60% off </a>
      </div>
    <a className="after-title1-desc" href="#"> Casual Shoes, Sneakers...! </a>
    <div className=" button--add"><button className="btn btn-primary"> Add to Cart</button> </div>
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
      <img className="_image" src="../../images/PumaShoes.webp" alt="Erro"></img>
    </div>
    <div className="title-box">
      <span className="title1">Puma FILA, Lotto.. </span>
      <div>
      <a className="after-title1" href="#">Upto 60% off </a>
      </div>
    <a className="after-title1-desc" href="#"> Casual Shoes </a>
    <div className=" button--add"><button className="btn btn-primary"> Add to Cart</button> </div>
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
    <div className=" button--add"><button className="btn btn-primary"> Add to Cart</button> </div>
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
    <div className=" button--add"><button className="btn btn-primary"> Add to Cart</button> </div>
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
    <div className=" button--add"><button className="btn btn-primary"> Add to Cart</button> </div>
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
    <div className=" button--add"><button className="  btn btn-primary"> Add to Cart</button> </div>
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