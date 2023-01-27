import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { fontSize } from '@mui/system';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoginPage from '../Pages/Login_Page';
import Registerform from '../Register/Registerform';
import AddProducts from '../Pages/AddProducts';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import { Search } from '@mui/icons-material';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  
  
  return (
    <div>

      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className='.navbar-custom'>
        <Container>
          <Navbar.Brand to="#home">
            <img width="75" src="../../images/flipkart-plus.png" alt="Flipkart" title="Flipkart" className="_2xm1JU" />
            <div className='text' style={{ color: 'black' }}>
              <a to='/' style={{ color: 'white' }}> Explore
                <span className='plus' style={{ color: 'yellow' }}>Plus
                  <img style={{ width: '1rem' }} src='../../images/plus_img.png' alt=''></img>
                </span>
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='Content--nav'>
            <Nav className="me-auto">

            <div className='box-container' >
        <form   className='_search-box'>
            <div className='_container'>
                {/* <div className='search'  >
                    <input type='text'  title = 'search for products and more' placeholder='Search your profucts here' style={{height:'32px',width:'150%', textAlign:'center'}}></input>
                </div> */}
                
                <div className="searchbar">
        <Search className='searchIcon'/>
        <input placeholder='search your products ' className='searchInput'/>
      </div>
              
            </div>
        </form>
        </div>
              <NavLink to="/home"><span className='span-heading'  ></span></NavLink>
              {/* <NavLink to="/"><span className='span-heading'  >Contact Us</span></NavLink> */}
              <span> <Button className='span-heading-login'  onClick={handleClickOpen4}>
              Contact Us
              </Button>
                <Dialog open={open4} onClose={handleClose4}>
                    <Contact/>
                </Dialog>
              </span>
              {/* <NavLink to="/"> <span className='span-heading'>About Us</span></NavLink> */}
              <span> <Button className='span-heading-login'  onClick={handleClickOpen3}>
              About Us
              </Button>
                <Dialog open={open3} onClose={handleClose3}>
                    <About/>
                </Dialog>
              </span>
              {/* <NavLink to="/productdetails"> <span className='span-heading'>ProductDetails</span></NavLink> */}
              <span> <Button className='span-heading-login'  onClick={handleClickOpen3}>
              ProductDetails
              </Button>
                <Dialog open={open2} onClose={handleClose3}>
                    <AddProducts/>
                </Dialog>
              </span>
              <span> <Button className='span-heading-login'  onClick={handleClickOpen2}>
              AddProduct
              </Button>
                <Dialog open={open2} onClose={handleClose2}>
                    <AddProducts/>
                </Dialog>
              </span>
              {/* <div className='dropdown'>
                <NavDropdown title="More" id="collasible-nav-dropdown">
                  <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item to="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </div> */}
            </Nav>
            <Nav>
               <span> <Button className='span-heading-login' onClick={handleClickOpen}>
                Login
              </Button>
                <Dialog open={open} onClose={handleClose}>
                  {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
                 
                    <LoginPage/>

                 

                </Dialog>
              </span>
              <span> <Button className='span-heading-login'  onClick={handleClickOpen1}>
                SignIn
              </Button>
                <Dialog open={open1} onClose={handleClose1}>
                  {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
                 
                    <Registerform/>

                 

                </Dialog>
              </span>
              <NavLink eventkey={2} to="#memes">
                <ShoppingCartIcon style={{ color: 'white' }} />
                <span style={{ color: 'white', fontSize: '1.2rem' }}>Cart</span>
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