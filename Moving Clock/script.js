
function displayTime() {
    const t = new Date();
    document.getElementById("clock").innerHTML = t.toLocaleTimeString();
}

function moveClockRandomly() {
    const clock = document.getElementById('clock');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const clockWidth = clock.offsetWidth;
    const clockHeight = clock.offsetHeight;

    const randomX = Math.floor(Math.random() * (screenWidth - clockWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - clockHeight));

    clock.style.left = `${randomX}px`;
    clock.style.top = `${randomY}px`;
}

function startClock() {
    displayTime();
    setInterval(displayTime,1000);
    setInterval(moveClockRandomly, 2000);
}

window.onload = startClock;