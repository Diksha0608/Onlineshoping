import React, { Component } from 'react'  
import './Section3.css'
import Carousel from 'react-bootstrap/Carousel'  
export class Section3 extends Component {  
        render() {  
  
                return (  
                  <div className='Carousel-box'>
                        <div className='_Carousel-box'>  
                      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../../images/offer--2.webp" width={250} height={300}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>Great deal from infinix</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="../../images/offer-1.webp" width={250} height={300}
      alt="Second slide"
    />
    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../images/newimage.webp" width={400} height={300} style={{Left:'50'}}
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
                        </div>  
                        </div>
                )  
        }  
}  
  
export default Section3 