import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';
import WatchLaterIcon from '@mui/icons-material/WatchLater';



const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};


const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        // href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        {/* <DateTimeDisplay value={days}  isDanger={days <= 3} />
        <p>:</p> */}
        <img style={{height:'2', width:'2'}} src='../../images/Timer.svg'></img>
        <DateTimeDisplay value={hours}  isDanger={false}  />
        <span>:</span>
        <DateTimeDisplay value={minutes}  isDanger={false} />
        <span>:</span>
        <DateTimeDisplay value={seconds}  isDanger={false} />
        <span>Left</span>
      </a>
     
    </div>
  );
};


const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
