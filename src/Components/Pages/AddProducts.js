import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'
import './AddProduct.css'
function AddProducts() {
  const [products,setProduct]=useState({name:'',file:'',price:'', description:''})
  const [start,setLoader]=useState(false)
  function setName(e){
          console.log("data",e.target.value)
    setProduct({...products,name:e.target.value})


}
function setFile(e){
  setProduct({...products,file:e.target.file})
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
    axios.post("http://localhost:3000/api/addproduct", products).then(response => {
            console.log("response", response)
            setLoader(false)
            
        }).catch(error => {
            console.log("error", error)
            setLoader(false)
        })
  };

  return (
 
      <div className=" productForm">
        <br/>
      <div className='col-sm-10 offset-sm-1 input_field'>
    <form onSubmit={(e) => handleSubmit(e)}>
        <div>
      <input className='form-control'  placeholder="name" value={products.name}
        onChange={setName} required />
        </div>
    <br/>
    <div>
    <input type='file' className='form-control' onChange={(e)=>setFile(e.target.value)}  placeholder='choose file'/>
    </div>
        <br/>
        <div>
        <input className='form-control' placeholder="price" value={products.price}
        onChange={setPrice} required />
        </div>
      
      <br/>
      <div>
        <textarea className='form-control' placeholder="description" value={products.description}
        onChange={setDescription} required />
        </div>
        
        <br/>
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