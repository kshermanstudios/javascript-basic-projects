const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];



const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');

// select each of the times which gives us a node of 4 items
// <h4 class="hours">8</h4>
const timeout = document.querySelectorAll('.deadline-format h4');
// console.log(timeout);

// make sure current date is always 10 days ahead
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempToday = tempDate.getDate();

// curent date test
// let currentDate = new Date();
// console.log(currentDate);


// future date 
// year, month, dayofmonth, hour, min, secs
// Fri Apr 22 2022 17:08:00
// hard setting for testing
// let futureDate = new Date(2022,1,23,11,30,0);
// year, month, day, hour, min, sec
// 10 days from now
const futureDate = new Date(tempYear,tempMonth,tempToday + 10, 11,30,0);
// console.log(futureDate);

// years hours mins
const year = futureDate.getFullYear();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();

// example 2 step process
// in this case month returns 0-11
let month = futureDate.getMonth();
month = months[month]; // 5

// more concise single step process
// in this case month returns 0-6
const dayOfWeek = weekdays[futureDate.getDay()];
const dayOfMonth = futureDate.getDate(); // 1-31
let AMPM = 'am';


// clean up the am/pm and add 0 if mins are less than 10
if(hours > 12){
  AMPM = 'pm';
  hours = hours - 12;
}

if(minutes < 10){
  minutes = '0' + minutes;
}

// giveaway ends on Sunday, 24 April 2022, 8:00am
giveaway.textContent = `giveaway end on ${dayOfWeek}, ${dayOfMonth} ${month} ${year}, ${hours}:${minutes}${AMPM}`;

// now we figure out the difference in times
// get the milisecs from our futureDate time set above
const futureTime = futureDate.getTime();
// console.log(futureTime); // milisecs

function getRemainingTime(){
  const today = new Date().getTime();
  // console.log(today); // milisecs

  // minus todays from the future which is higher
  const timeLeft = futureTime - today;
  // console.log('timeLeft ' + timeLeft);

  // 1s = 1000
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  // 24 hours * 
  const oneDay = 24*60*60*1000; // 86400000
  const oneHour = 60*60*1000; // 3600000
  const oneMin = 60*1000; // 60000

  // calculate with Modulus (Remainder) operator ( % )
  let daysLeft = Math.floor( timeLeft/oneDay );
  let hoursLeft = Math.floor( (timeLeft % oneDay) / oneHour );
  let minsLeft = Math.floor( (timeLeft % oneHour) / oneMin );
  let secsLeft = Math.floor( (timeLeft % oneMin) / 1000);
  

  // now we can set a values array
  const values = [daysLeft, hoursLeft, minsLeft, secsLeft];


  // this will set the values above to '0' if less than for a cleaner vers
  function format(item){
    // if less than 10 left we go with 08, 07, 06 ect...
    if(item < 10){
      return item = `0${item}`;
    } 
    // else we just return the current num
    return item;
  }


  // so now we add each of the above values
  // into our array inners items
  // timeout is a const above 
  timeout.forEach( function(item, index){
    // pushes into .deadline-format h4
    item.innerHTML = format(values[index]);
  });


  // if time is expired
  if(timeLeft < 0){
    clearInterval(countdown);
    deadline.innerHTML = '<h4 class="expired">This giveaway has expired</h4>';
  }

  
}


// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();





