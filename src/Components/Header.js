import React from 'react'
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';




const Header = () => {
  return (
    <div>
   <Navbar bg="primary" expand="lg" className='.navbar-custom' >
  <Container className='.navbar-custom'>
    <div href="#home">
        <img width="75" src="../../images/flipkart-plus.png" alt="Flipkart" title="Flipkart" className="_2xm1JU"/>
        <div className='text' style={{color: 'black'}}>
        <a href='/' style={{color:'white'}}> Explore
        <span className='plus' style={{color:'yellow'}}>Plus
        <img style={{width: '1rem'}} src='../../images/plus_img.png' alt=''></img>
        </span>
        </a>
        </div>
        </div>
        <NavLink to='/home' style={{color:'white', fontSize:'17px'}}> <span>Home</span> </NavLink>
    <div className='box-container' >
        <form   className='_search-box'>
            <div className='_container'>
                <div className='search'  >
                    <input type='text'  title = 'search for products and more' placeholder='Search your profucts here' style={{height:'32px',width:'150%', textAlign:'center'}}></input>
                </div>
                <button className='_btn' type='submit'>
                    {/* <svg height='20' width='20' viewBox='0 0 17 18' src='../../search_img.webp'> </svg> */}
                    <SearchIcon color='primary'/>
                </button>
            </div>
        </form>
        </div>
        <div className='_login_seller'>

        

        <div className='login'>
          <NavLink to='/anotherlogin'> <button className='login_btn'>Log In</button> </NavLink> 
        </div>
    
        <div className='seller'>
            <NavLink to='/becomeseller'>
                <span  className ='_seller-span'style={{color:"white"}} >Become a Seller</span>
            </NavLink >
        </div>
        
        </div>
       <NavLink to='/registerform' style={{color:"white"}} >RegisterPage</NavLink> 

        
<div className="btn-group">
<NavLink to='more'>
  <div className='content'>
      <div className='_more-sec'>More</div>
      <KeyboardArrowDownIcon  sx={{ fontSize: 20 }} style={{color:'white'}}/>
  </div>
  </NavLink> 
</div>
<div className="btn-group">
<NavLink to='my_cart'>
  <div className='content'>
      <ShoppingCartIcon style={{color:'white'}} />
      <div className='_more-sec'>Cart</div>
  </div>
  </NavLink>
</div>
        {/* className="dropdown-item" */}
  </Container>
</Navbar>
    </div>
  )
}

export default Header