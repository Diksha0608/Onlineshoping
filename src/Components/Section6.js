import React from 'react'
import './Section5.css'
import Section6Swiper from './Section6Swiper'


const Section6 = () => {

  return (
    <div className='main--box'>
        <div className='after--main'>
            <div className='header--nav'>
            <h3 className='deals'>Best Electronics</h3>
            <div className='view--all'><a className='view-a' href='https://www.flipkart.com/dotd-store?=Web&wid=4.dealCard.OMU_3&otracker=hp_omu_Deals%2Bof%2Bthe%2BDay_3&otracker1=hp_omu_SECTIONED_manualRanking_neo%2Fmerchandising_Deals%2Bof%2Bthe%2BDay_NA_wc_view-all_3'>View All</a></div>
            </div>
          
            <Section6Swiper/>
            
        </div>
    </div>
  )
}

export default Section6