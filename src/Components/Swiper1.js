import React, { Component, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card , CardGroup,ListGroup,ListGroupItem} from "react-bootstrap";
import data from '../MOCK_DATA.json'
import items from '../MOCK_DATA1.json'
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper1.css";

// import required modules
import { Pagination, Navigation } from "swiper";

class Swiper1 extends Component  {
  state = {

    pageTitle: "Customers",
    productCount: 5,
    products: []
}
constructor() {

    super()


}

render() {


  //  const [datas , setData] = useState(data);

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
  {this.state.products.map(data=>{
    return(
     <div className="all-essentials">
     <div className="image-box">
       {/* <img className="_image" src="../../images/Watch-img.webp"></img> </div> alt="Erro"></img> */}
       <img className="_image" src="../../images/Watch-img.webp" alt="Error"></img>
     </div>
     <div className="title-box">
       <span className="title">{data.name}</span>
       <div>
       <a className="after-title" to="/"> {data.price} </a>
       </div>
     <a className="after-title-desc" to="/"> {data.description} </a>
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
      <a className="after-title" to="#"> From ₹149 </a>
      </div>
    <a className="after-title-desc" to="#"> Knockout Deals! </a>
    </div>

  </div>
  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Shoes-img.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title">Sprax and Bata Addidas...</span>
      <div>
      <a className="after-title" to="#"> from ₹199 + extra 10% off </a>
      </div>
    <a className="after-title-desc" to="#"> Mens casual shoes  </a>
    </div>

  </div>

  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Kitchen-img.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title">Kitchen and Dining Essentials</span>
      <div>
      <a className="after-title" to="#"> From ₹199 </a>
      </div>
    <a className="after-title-desc" to="#"> Best Discounts! </a>
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
       <span className="title">{datas.name}</span>
       <div>
       <a className="after-title" to="/"> {datas.price} </a>
       </div>
     <a className="after-title-desc" to="/"> {datas.description} </a>
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
      <a className="after-title" to="#"> Under ₹299 </a>
      </div>
    <a className="after-title-desc" to="#"> Limited Time Offer </a>
    </div>

  </div>
  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Watch-img.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title">Watches</span>
      <div>
      <a className="after-title" to="#"> From ₹149 </a>
      </div>
    <a className="after-title-desc" to="#"> Knockout Deals! </a>
    </div>

  </div>
  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Shoes-img.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title">Sprax and Bata Addidas...</span>
      <div>
      <a className="after-title" to="#"> from ₹199 + extra 10% off </a>
      </div>
    <a className="after-title-desc" to="#"> Mens casual shoes  </a>
    </div>

  </div>

  <div className="all-essentials">
  <div className="image-box">
      <img className="_image" src="../../images/Kitchen-img.webp" alt="Error"></img>
    </div>
    <div className="title-box">
      <span className="title">Kitchen and Dining Essentials</span>
      <div>
      <a className="after-title" to="#"> From ₹199 </a>
      </div>
    <a className="after-title-desc" to="#"> Best Discounts! </a>
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
      <a className="after-title" to="/"> From ₹199 </a>
      </div>
    <a className="after-title-desc" to="/"> Best Discounts! </a>
    </div>

    </div>
    
    </CardGroup>
       
          
        </SwiperSlide>
     
      </Swiper>
    </>
  );
}
componentDidMount (){
  console.log("did mount")
  axios.get('https://justolearnapp.herokuapp.com/api/addproduct').then(response=>{
      console.log("data",response)
      this.setState({products:response.data.result})
  }).catch(error=>{
      console.log("error",error)
  })
}
}

export default Swiper1;






  // {"id":3,"image":"../../images/TrendyKurtas-img.webp","heading":"Trendy Kurtas and sets","desc":"Trendy Styles","offer":"under ₹499"},
    // {"id":4,"image":"../../images/CottonSarees-img.webp","heading":"Cotton Sarees","desc":"Never Before Deal","offer":"under ₹199"}]