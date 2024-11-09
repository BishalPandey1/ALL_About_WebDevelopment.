let timer;
let isRunning = false;
let time = 0;
let laps = [];

const timeDisplay = document.getElementById('time');
const startStopBtn = document.getElementById('startStopBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapsList = document.getElementById('lapsList');

function updateTime() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startStopTimer() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(() => {
            time++;
            updateTime();
        }, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    laps = [];
    updateTime();
    updateLaps();
    startStopBtn.textContent = 'Start';
}

function addLap() {
    if (isRunning) {
        laps.push(time);
        updateLaps();
    }
}

function updateLaps() {
    lapsList.innerHTML = '';
    laps.forEach((lapTime, index) => {
        const lapElement = document.createElement('li');
        const hours = Math.floor(lapTime / 3600);
        const minutes = Math.floor((lapTime % 3600) / 60);
        const seconds = lapTime % 60;
        lapElement.textContent = `Lap ${index + 1}: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        lapsList.appendChild(lapElement);
    });
}

startStopBtn.addEventListener('click', startStopTimer);
lapBtn.addEventListener('click', addLap);
resetBtn.addEventListener('click', resetTimer);
updateTime();
