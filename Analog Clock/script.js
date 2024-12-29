let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

function displayTime() {
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hrRotation = 30 * hr + (min / 2);
  let minRotation = 6 * min;
  let secRotation = 6 * sec;

  hour.style.transform = `rotate(${hrRotation}deg)`;
  minute.style.transform = `rotate(${minRotation}deg)`;
  second.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(displayTime, 1000);
