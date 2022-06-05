import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'
import './AddProduct.css'
function AddProducts() {
  const [products,setProduct]=useState({name:'',price:'',description:''})
  const [start,setLoader]=useState(false)
  function setName(e){
          console.log("data",e.target.value)
    setProduct({...products,name:e.target.value})


}
function setPrice(e){
  console.log("data",e.target.value)
    setProduct({...products,price:e.target.value})


}
function setDescription(e){
   console.log("data",e.target.value)
    setProduct({...products,description:e.target.value})
  
  
  }

  const handleSubmit = e => {
    e.preventDefault();
console.log("product",products)
    // const data = { title, body };
    setLoader(true)
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(products)
    // };
    // fetch("https://justolearnapp.herokuapp.com/api/addproduct", requestOptions)
    //   .then(response => {response.json()
    //     setLoader(false)
    // })
    //   .then(res => console.log(res));
    axios.post("https://justolearnapp.herokuapp.com/api/addproduct", products).then(response => {
            console.log("response", response)
            setLoader(false)
            
        }).catch(error => {
            console.log("error", error)
            setLoader(false)
        })
  };

  return (
      <div className=" productForm">
          <div className='input--form'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='input'>
          <input  placeholder="name" value={products.name}
            onChange={setName} required />
            </div>
            <div className='input'>
            <input placeholder="price" value={products.price}
            onChange={setPrice} required />
            </div>
            <div className='input'>
            <input placeholder="description" value={products.description}
            onChange={setDescription} required />
            </div>
        
          <button className="btn btn-primary" type="submit" >
           Add Products
          </button>
        </form>
        </div>
        <BounceLoader loading={start}></BounceLoader>
      </div>
  );
}
export default AddProducts;