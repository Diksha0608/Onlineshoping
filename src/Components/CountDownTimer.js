import React, {useState, useEffect } from 'react'
import {getRemainingTimeUntilMsTimeStamp} from './Countdown/Utils/CountdownUtils'

const defaultRemainingTime = {
  hours:'00',
  minutes : '00',
  seconds:'00',
  days:'00'
}

const CountDownTimer = ({couuntdownTimerStampMs}) => {
    
       

    const [Ctime, setCtime] = useState(defaultRemainingTime);

      useEffect(() => {
        const intervalId = setInterval(() => {
          updateRemainingTime(couuntdownTimerStampMs)
       
         },1000)
         return () => clearInterval(intervalId);
       },[couuntdownTimerStampMs])
       
       function updateRemainingTime(countdown) {
         setCtime(getRemainingTimeUntilMsTimeStamp(countdown))
       
       }
  return (
      <>
    <div className='--span'>
    <span>{Ctime.days}</span>
      <span> Days</span>
          
            <span>hour</span>
            <span>{Ctime.hours}</span>
           
            <span>minutes</span>
            <span>{Ctime.minutes}</span>
            <span>seconds</span>
            <span>{Ctime.seconds}</span>

    </div>
    </>
  )
}

export default CountDownTimer;