//Write a program to demonstrate setTimeout(), clearTimeout(), setInterval()

function showTime() {
  let d= new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}
const timeoutID = setTimeout(() => {console.log("Current Time is: " );}, 1000);
const intervalID = setInterval(showTime, 5000);
setTimeout(() => {clearTimeout(timeoutID); clearInterval(intervalID); }, 10000);


