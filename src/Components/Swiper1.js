import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card , CardGroup,ListGroup,ListGroupItem} from "react-bootstrap";
import data from '../MOCK_DATA.json'
import items from '../MOCK_DATA1.json'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper1.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Swiper1() {
   const [datas , setData] = useState(data);

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
  {datas.map(data=>{
    return(
     <div className="all-essentials">
     <div className="image-box">
       <img className="_image" src={data.image} alt="Erro"></img>
     </div>
     <div className="title-box">
       <span className="title">{data.heading}</span>
       <div>
       <a className="after-title" href="#"> {data.offer} </a>
       </div>
     <a className="after-title-desc" href="#"> {data.desc} </a>
     </div>
   </div>
    )

  })}
 

  {/* <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Watch-img.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title">Watches</span>
      <div>
      <a className="after-title" href="#"> From ₹149 </a>
      </div>
    <a className="after-title-desc" href="#"> Knockout Deals! </a>
    </div>

  </div>
  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Shoes-img.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title">Sprax and Bata Addidas...</span>
      <div>
      <a className="after-title" href="#"> from ₹199 + extra 10% off </a>
      </div>
    <a className="after-title-desc" href="#"> Mens casual shoes  </a>
    </div>

  </div>

  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Kitchen-img.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title">Kitchen and Dining Essentials</span>
      <div>
      <a className="after-title" href="#"> From ₹199 </a>
      </div>
    <a className="after-title-desc" href="#"> Best Discounts! </a>
    </div>


  </div> */}
  
</div>


        </CardGroup>
        </SwiperSlide>

        <SwiperSlide>
        <CardGroup>
  
 <div className="shop-essentails">
 {items.map(datas=>{
    return(
     <div className="all-essentials">
     <div className="image-box">
       <img className="_image" src={datas.image} alt="Erro"></img>
     </div>
     <div className="title-box">
       <span className="title">{datas.heading}</span>
       <div>
       <a className="after-title" href="#"> {datas.offer} </a>
       </div>
     <a className="after-title-desc" href="#"> {datas.desc} </a>
     </div>
   </div>
    )

  })}

  {/* <div className="all-essentials">
    <div className="image-box">
      <img className="_image" src="../../images/Trendy-img.webp" alt="Erro"></img>
    </div>
    <div className="title-box">
      <span className="title">Trendy Sarees</span>
      <div>
      <a className="after-title" href="#"> Under ₹299 </a>
      </div>
    <a className="after-title-desc" href="#"> Limited Time Offer </a>
    </div>

  </div>
  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Watch-img.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title">Watches</span>
      <div>
      <a className="after-title" href="#"> From ₹149 </a>
      </div>
    <a className="after-title-desc" href="#"> Knockout Deals! </a>
    </div>

  </div>
  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Shoes-img.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title">Sprax and Bata Addidas...</span>
      <div>
      <a className="after-title" href="#"> from ₹199 + extra 10% off </a>
      </div>
    <a className="after-title-desc" href="#"> Mens casual shoes  </a>
    </div>

  </div>

  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Kitchen-img.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title">Kitchen and Dining Essentials</span>
      <div>
      <a className="after-title" href="#"> From ₹199 </a>
      </div>
    <a className="after-title-desc" href="#"> Best Discounts! </a>
    </div>


  </div> */}
  
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
      <span className="title">Kitchen and Dining Essentials</span>
      <div>
      <a className="after-title" href="#"> From ₹199 </a>
      </div>
    <a className="after-title-desc" href="#"> Best Discounts! </a>
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






  // {"id":3,"image":"../../images/TrendyKurtas-img.webp","heading":"Trendy Kurtas and sets","desc":"Trendy Styles","offer":"under ₹499"},
    // {"id":4,"image":"../../images/CottonSarees-img.webp","heading":"Cotton Sarees","desc":"Never Before Deal","offer":"under ₹199"}]