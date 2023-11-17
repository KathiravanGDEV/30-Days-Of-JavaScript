//Program to Create a Clock
function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // 24-Hour Format
  hours = hours < 10 ? "0" + hours : hours;
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds;

  console.log(time);
}
// showTime function here execute repeatedly at every 1000 milli second(1 Sec)
let timer = setInterval(showTime, 1000);

// Setting the Time Limit to execute the clock.
setTimeout(function () {
  clearInterval(timer);
}, 10000);
