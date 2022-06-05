import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimeStamp(timestampMs){

  const timeStampDayjs = dayjs(timestampMs)
  const nowTimeStamp = dayjs();
  // console.log(timeStampDayjs)
  // console.log(nowTimeStamp)

  if(timeStampDayjs.isBefore(nowTimeStamp)){
    return {
      hours:'00',
      minutes : '00',
      seconds:'00',
      days:'00'
    
    }
  }
    return {
        hours: getRemainingHours( nowTimeStamp ,timeStampDayjs),
        minutes : getRemainingMinutes( nowTimeStamp ,timeStampDayjs),
        seconds : getRemainingSeconds( nowTimeStamp ,timeStampDayjs),
        days:getRemainingDays( nowTimeStamp ,timeStampDayjs),
      }
};

function getRemainingSeconds( nowTimeStamp ,timeStampDayjs){
 
   const seconds = timeStampDayjs.diff(nowTimeStamp, 'seconds') % 60;
   return PadWithZero(seconds, 2)
}

function getRemainingMinutes( nowTimeStamp ,timeStampDayjs){

  const minutes = timeStampDayjs.diff(nowTimeStamp, 'minutes') % 60;
  return  PadWithZero(minutes, 2)
}

function getRemainingHours( nowTimeStamp ,timeStampDayjs){
  // 25 hr -> 24hr and 1 day

  const hours = timeStampDayjs.diff(nowTimeStamp, 'hours') % 24;
  return  PadWithZero(hours, 2)

}

function getRemainingDays( nowTimeStamp ,timeStampDayjs){

  const days = timeStampDayjs.diff(nowTimeStamp, 'days') ;
  return days.toString();

}

function PadWithZero(number, minlength){
  const numberString = number.toString();
  if(numberString.length >= minlength) return numberString;
  return '0'.repeat(minlength - numberString.length) + numberString; 
}