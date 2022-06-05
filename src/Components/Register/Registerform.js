import './Registerform.css';
import React, { Component, useState } from 'react';
import axios from 'axios'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'
function Registerform () {
 

    const [user,setUser] = useState({ name: '', email: '', phone_no: ''});
    const [start,setLoader]=useState(false);
    console.log(user);

   
    
    function setName(e){
        console.log("data",e.target.value)
        setUser({...user,name:e.target.value})
       
       
       }
       function setEmail(e){
        console.log("data",e.target.value)
         setUser({...user,email:e.target.value})
       
       
       }
       function setPhone_No(e){
        console.log("data",e.target.value)
        setUser({...user,phone_no:e.target.value})
       
       
       }

     const onSubmitHandle = (e) => {
        e.preventDefault();
        setLoader(true)

        axios.post("https://ecomerce-back-end.herokuapp.com/api/users", user).then(response => {
            console.log("response", response)
            setUser(response.data.result)
            console.log(user)
            setLoader(false)
         }).catch(error => {
            console.log("error", error);
            setLoader(false);
        })

    }

    // console.log("submit",onSubmitHandle);
    

        return (
            <div className='body'>
                <div className='container--1'>
                <form onSubmit={(e) => onSubmitHandle(e)}>

                    <div className="container">
                        <div className='register'>
                           <h1>Register </h1> 
                        </div>

                        <div>
                            <label>Enter Your Name</label>
                            <input onChange={setName} type="text" value={user.name} placeholder="enter your  name"></input>
                        
                        </div>
                        <div>
                            <label>Enter Your email</label>
                            <input onChange={setEmail} type="text" value={user.email} placeholder="enter your email"></input>
                    
                        </div>

                        <div>
                            <label>Enter Your Phone No</label>
                            <input onChange={setPhone_No} type="number" value={user.phone_no} placeholder="enter your phone number"></input>
                            
                        </div>
                        <div className='submit-btn'>
                        <button className="btn--1 btn-primary" type="submit">Submit</button>
                        </div>
                        <BounceLoader loading={start}></BounceLoader>
                    </div>
                </form>
                </div>
            </div>
        );
    }


export default Registerform;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Registerform.css'
 
//   function Registerform(){
   
//     return (
     
//         <div className="maincontainer">
         
         
//           <div className="container">
  
//                 <div className="card bg-light">
//                 <article className="card-body mx-auto" style={{maxWidth: "400px"}}>
//                     <h4 className="card-title mt-3 text-center">Create Account</h4>
//                     <p className="text-center">Get started with your free account</p>
//                     <p>
//                         <a href="#" className="btn btn-block btn-twitter"> <i className="fab fa-twitter"></i>   Login via Twitter</a>
//                         <a href="#" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i>   Login via facebook</a>
//                     </p>
//                     <p className="divider-text">
//                         <span className="bg-light">OR</span>
//                     </p>
//                     <form>
//                     <div className="form-group input-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text"> <i className="fa fa-user"></i> </span>
//                         </div>
//                         <input name="" className="form-control" placeholder="Full name" type="text" />
//                     </div> 
//                     <div className="form-group input-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
//                         </div>
//                         <input name="" className="form-control" placeholder="Email address" type="email" />
//                     </div>
//                     <div className="form-group input-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
//                         </div>
//                         <select className="custom-select" style={{maxWidth: "120px"}}>
//                             <option value="">+91</option>
//                             <option value="1">+001</option>
//                             <option value="2">+020</option>
//                             <option value="3">+011</option>
//                         </select>
//                         <input name="" className="form-control" placeholder="Phone number" type="text" />
//                     </div> 
//                     <div className="form-group input-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text"> <i className="fa fa-building"></i> </span>
//                         </div>
//                         <select className="form-control">
//                             <option value=""> Select job type</option>
//                             <option>Web Developer</option>
//                             <option>Full Stack Developer</option>
//                             <option>Mean Stack</option>
//                         </select>
//                     </div> 
//                     <div className="form-group input-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
//                         </div>
//                         <input className="form-control" placeholder="Create password" type="password" />
//                     </div> 
//                     <div className="form-group input-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
//                         </div>
//                         <input className="form-control" placeholder="Repeat password" type="password" />
//                     </div>                                       
//                     <div className="form-group">
//                         <button type="button" className="btn btn-primary btn-block"> Create Account  </button>
//                     </div>     
//                     <p className="text-center">Have an account? <a href="#">Log In</a> </p>                                                                 
//                 </form>
//                 </article>
//                 </div> 
                
//                 </div> 
             
//         </div>
     
      
// )
// };


// export default Registerform;