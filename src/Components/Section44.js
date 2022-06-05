import React, { useEffect, useRef, useState } from 'react'
import './Section44.css'
// import {Link} from 'react-router-dom'
import CountDownTimer from './CountDownTimer'
import CountdownAll from './Hooks/CountdownAll'
import Swiper1 from './Swiper1';

const Section44 = () => {

//  let time = new Date().toLocaleTimeString();
// const UpdateTime = () => {
//    time = new Date().toLocaleTimeString();
//   setCtime(time);

// }
// setInterval(UpdateTime);

// const [timerDays, settimerDays] = useState('00');
// const [timerHours, settimerHours] = useState('00');
// const [timerMinutes, settimerMunutes] = useState('00');
// const [timerSeconds, settimerSeconds] = useState('00');

// let interval = useRef()

// const setTimer = () =>{
//   const countdownDate = new Date('May 30, 2020 00:00:00').getTime()

//   interval = setInterval(() =>{
//     const now = new Date().getTime();
//     const difference = countdownDate - now;

//     const Days = Math.floor(difference/(1000 * 60 * 60* 24))
//     const Hours = Math.floor((difference % (1000 * 60 * 60* 24) / (1000 * 60 * 60)))
//     const Minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60 ))
//     const Seconds = Math.floor((difference % (1000 * 60)) / 1000);

//     if(difference < 0){
//       clearInterval(interval.current);

//     }else{
//       console.log(Days)
//       settimerDays(Days)
//       settimerHours(Hours)
//       settimerMunutes(Minutes)
//       settimerSeconds(Seconds)
//     }

//   },1000);
// };


// useEffect(() =>{
//   setTimer();
//   return () =>{
//     clearInterval(interval.current);
//   }
// })

// console.log(new Date().getTime());



  return (
      <>
      <div className='container--box'>
      <div className='_main_container'>
        <nav className='nav_container'>
          <div className='__header'>
          <h3 className='deals'>Deals of the day</h3>
          <div className='time'>
            <CountdownAll/>
            {/* <span>{timerDays}</span>
            <span>DAys</span>
            <span>{timerHours}</span>
            <span>houre</span>
            <span>{timerMinutes}</span>
            <span>minutes</span>
            <span>{timerSeconds}</span>
            <span>seconds</span> */}
            {/* <CountDownTimer couuntdownTimerStampMs={1652459303233}/> */}
          
          </div>
        <div className='view--all'><a className='view-a' href='https://www.flipkart.com/dotd-store?=Web&wid=4.dealCard.OMU_3&otracker=hp_omu_Deals%2Bof%2Bthe%2BDay_3&otracker1=hp_omu_SECTIONED_manualRanking_neo%2Fmerchandising_Deals%2Bof%2Bthe%2BDay_NA_wc_view-all_3'>View All</a></div>
        </div>
        </nav>
        {/* <div className='--img--box'> */}
      
        {/* </div> */}
        <div className='div--1'>
  <Swiper1/>


        </div>
      </div>
      <aside className='aside_container'>
     <img  className= 'image' src='../../images/flipkart.webp'></img>
        </aside>
      </div>
      
    </>
  )
}

export default Section44