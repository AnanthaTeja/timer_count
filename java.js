const seconds = document.querySelector(".S .number"),
  minutes = document.querySelector(".M .number"),
  hour = document.querySelector(".H .number"),
  day = document.querySelector(".D .number");

let secvalue = 60,
  minvalue = 60,
  hourvalue = 2,
  dayvalue = 90;
const timeFunction = setInterval(() => {
  secvalue--;
  if (secvalue == 0) {
    minvalue--;
    secvalue = 60;
  }
  if (minvalue == 0) {
    hourvalue--;
    minvalue = 60;
  }
  if (hourvalue == 0) {
    dayvalue--;
    hourvalue = 24;
  }

  console.log(secvalue);
  seconds.textContent = secvalue < 10 ? `0${secvalue}` : secvalue;
  minutes.textContent = minvalue < 10 ? `0${minvalue}` : minvalue;
  hour.textContent = hourvalue < 10 ? `0${hourvalue}` : hourvalue;
  day.textContent = dayvalue < 10 ? `0${dayvalue}` : dayvalue;
}, 1000);
//console.log(seconds, minutes, hour, day);
