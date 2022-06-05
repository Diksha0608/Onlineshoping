import React from 'react';
import Header from '../Header';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import AnotherLogin from '../Pages/AnotherLogin';
import Home from '../Pages/Home';
import BecomeSeller from '../Pages/BecomeSeller';
import  More  from '../Pages/More';
import My_Cart from '../Pages/My_Cart';
// import Registerform from '../Register/Registerform';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section44 from '../Section44';
import Section5 from '../Section5';
import Section6 from '../Section6';
import Footer from '../Footer'
import productDetails from '../Pages/ProductDetails';
import AxiosDataFetch from '../Pages/AxiosDataFetch';
import NavBar from '../NavBar/NavBar';
import HideShow from '../Pages/HideShow';
import HttpRequest from '../Pages/HttpRequest';
import { Dropdown } from 'bootstrap';
import AddProducts from '../Pages/AddProducts';
import ApiUser from '../Pages/ApiUser';
import Login_page from '../Pages/Login_Page';
import AnotherRegForm from '../Register/AnotherRegForm'


const NavRouter = () => {
    return (
        <div>
    <BrowserRouter>
     {/* <Header/> */}
     <NavBar/>
     <Routes>
       <Route exact  path='/' element={<Home/>}></Route>
       {/* <Route exact  path='/anotherlogin' element={<AnotherLogin/>}></Route> */}
       {/* <Route exact  path='/more' element={<More/>}></Route> */}
       <Route exact  path='/my_cart' element={<My_Cart/>}></Route>
       {/* <Route exact  path='/registerform' element={<Registerform/>}></Route> */}
       <Route exact  path='/addproducts' element={<AddProducts/>}></Route>
       <Route exact  path='/login_page' element={<Login_page/>}></Route>
       <Route exact  path='/anotherregform' element={<AnotherRegForm/>}></Route>

       
     </Routes>
     {/* <HttpRequest/> */}
    {/* //  <ListeningForClicks/> */}
     {/* <Dropdown/> */}
     {/* <HideShow/> */}
     {/* <Registerform/> */}
     {/* <Login_page/> */}
     {/* <ApiUser/> */}
     {/* <Section2/>
     <Section3/>
    <Section44/>
    <Section5/>
    <Section6/>
    <Footer/> */}
    
     </BrowserRouter>
     {/* <AxiosDataFetch/> */}
    
        </div>
    );
};

export default NavRouter;