import React from 'react'
import './Section2.css'
import ChevronDownarrow from './ChevronDownarrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Section2 = () => {
  return (
    <div>
        <div className='_card-container'>
            <div className='card_with_text'>
              
            <div className='_image' >
                <img src='../../images/top_offers.webp' alt='error' ></img>
            </div>
            <div className='_text-content'>
                <div>Top Offers</div>
            </div>
            </div>
           

            <div className='card_with_text'>
            <div className='_image'>
                <img src='../../images/img2.webp' alt='error' ></img>
            </div>
            <div className='_text-content'>
                <div>Grocery</div>
            </div>
            </div>

            <div className='card_with_text'>
            <div className='_image'>
                <img src='../../images/mobiles.webp' alt='error' ></img>
            </div>
            <div className='_text-content'>
                <div>Mobiles</div>
            </div>
            </div>

            <div className='card_with_text'>
            <div className='_image'>
                <img src='../../images/faishons.webp' alt='error'></img>
            </div>
            <div className='_text-content'>
                <div>Fashion</div>
            </div>
            </div>

            <div className='card_with_text'>
            <div className='_image'>
                <img src='../../images/electronics_1.webp' alt='error'></img>
            </div>
            <div className='_text-content'>
                <div>Electronics  <KeyboardArrowDownIcon  sx={{ fontSize: 20 }} style={{color:'black'}}/></div>
            </div>
            </div>

            <div className='card_with_text'>
            <div className='_image'>
                <img src='../../images/home_1.webp' alt='error' ></img>
            </div>
            <div className='_text-content'>
                <div style={{display:'flex', justifyContent:'space-around'}}>Home<ChevronDownarrow width={10} fill={'#000000'}/> </div>
            </div>
            </div>

            <div className='card_with_text'>
            <div className='_image'>
                <img src='../../images/appliance1.webp' alt='error' ></img>
            </div>
            <div className='_text-content'>
                <div className='down-arrow'>Appliance <KeyboardArrowDownIcon   sx={{ fontSize: 20 }} style={{color:'black'}}/> </div>
            </div>
            </div>

            <div className='card_with_text'>
            <div className='_image'>
                <img src='../../images/travel1.webp' alt='error' ></img>
            </div>
            <div className='_text-content'>
                <div>Travel</div>
            </div>
            </div>

            <div className='card_with_text'>
            <div className='_image'>
                <img src='../../images/beauty_toys.webp' alt='error' ></img>
            </div>
            <div className='_text-content'>
                <div>Beauty, Toys and More <KeyboardArrowDownIcon  className='down-arrow'  sx={{ fontSize: 20 }} style={{color:'black'}}/> </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section2