import React from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { fontSize } from '@mui/system';

const NavBar = () => {
  return (
    <div>
        
        <Navbar collapseOnSelect expand="lg" bg="primary"  variant="dark" className='.navbar-custom'>
  <Container>
  <Navbar.Brand to="#home">
  {/* <a to='/' style={{color:'white', fontSize:'1rem'}}> Explore
        <p className='plus' style={{color:'yellow', fontSize:'0.8rem'}}>Plus
        <img style={{width: '1rem'}} src='../../images/plus_img.png' alt=''></img>
        </p>
        </a> */}
         <img width="75" src="../../images/flipkart-plus.png" alt="Flipkart" title="Flipkart" className="_2xm1JU"/>
        <div className='text' style={{color: 'black'}}>
        <a to='/' style={{color:'white'}}> Explore
        <span className='plus' style={{color:'yellow'}}>Plus
        <img style={{width: '1rem'}} src='../../images/plus_img.png' alt=''></img>
        </span>
        </a>
        </div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className='Content--nav'>
    <Nav className="me-auto">
    <NavLink to="/home"><span className='span-heading'  ></span></NavLink>
      <NavLink to="/"><span className='span-heading'  >Contact Us</span></NavLink>
      <NavLink to="/"> <span className='span-heading'>About Us</span></NavLink>
      <NavLink to="/"> <span className='span-heading'>ProductDetails</span></NavLink>
      <NavLink to="/addproducts"> <span className='span-heading'>Add product</span></NavLink>
      <div className='dropdown'>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item to="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      </div>
    </Nav>
    <Nav>
      <NavLink to="/login_page"> <span className='span-heading-login'>Login</span></NavLink>
      <NavLink to="/anotherregform"> <span className='span-heading-login'>Sign Up</span></NavLink>
      <NavLink eventkey={2} to="#memes">
      <ShoppingCartIcon style={{color:'white'}} />
      <span style={{color:'white' ,fontSize:'1.2rem'}}>Cart</span>
      {/* <div className='_more-sec'>Cart</div> */}
      </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar