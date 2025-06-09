let hours = document.getElementById("hoursInput");
let minutes = document.getElementById("minutesInput");
let button = document.getElementById("convertBtn");
let paraone = document.getElementById("timeInSeconds");
let paratwo = document.getElementById("errorMsg");

button.addEventListener("click", function(event) {
    let h = hours.value;
    let m = minutes.value;

    if (h === "" || m === "") {
        paratwo.textContent = "";
        paraone.textContent = "please Enter valid";
    } else {
        paraone.textContent = "";
        let seconds = Number(h) * 3600 + Number(m) * 60;
        paratwo.textContent = seconds + "s";
    }
});
