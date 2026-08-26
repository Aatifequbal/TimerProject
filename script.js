const start = document.getElementById("start-button");
const stop = document.getElementById("stop-button");
const time = document.getElementById("time");

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

let interval;

// ── Start Timer ──
start.addEventListener('click', () => {

    // Get values from inputs; if empty, treat as 0
    let hours = Number(hoursInput.value) || 0;
    let minutes = Number(minutesInput.value) || 0;
    let seconds = Number(secondsInput.value) || 0;

    let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

    // If total seconds is zero, show alert and do nothing
    if (totalSeconds <= 0) {
        alert("Please enter a valid time!");
        return;
    }

    clearInterval(interval);

    interval = setInterval(() => {

        let h = Math.floor(totalSeconds / 3600);
        let m = Math.floor((totalSeconds % 3600) / 60);
        let s = totalSeconds % 60;

        // Format with two digits
        time.innerText = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

        if (totalSeconds === 0) {
            clearInterval(interval);
            alert("Time is over! 😂");

            // ─── On Time Over: clear inputs so placeholders show ───
            hoursInput.value = "";
            minutesInput.value = "";
            secondsInput.value = "";
            time.innerText = "00:00:00";
        }
        totalSeconds--;

    }, 1000);
});

// ── Stop Timer ──
stop.addEventListener('click', () => {
    clearInterval(interval);

    // ─── On Stop: clear inputs so placeholders show ───
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
    time.innerText = "00:00:00";
});