const counter = document.getElementById("Counter");

window.onload = function() {
    let countSeconds = 0
    setInterval(function() {
        counter.textContent = countSeconds + " Seconds...";
        countSeconds++;
    }, 1000);
}