// Login Page Js code

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
submitBtn.addEventListener("click", function () {
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    setTimeout(function () {
        alert("Your Form Successfully Signed up");
        location.reload();
    }, 800);
});

prevBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

// ------------------------------  otp timer----------------------------------------
document.getElementById("start").addEventListener("click", startCountdown);
document.getElementById("start2").addEventListener("click", startCountdown);
document.getElementById("stop").addEventListener("click", stopCountdown);
document.getElementById("stop2").addEventListener("click", stopCountdown);

let time = 10;
let timer;
function startCountdown() {
    let countdownElement = document.getElementById("countdown");
    let countdownElement2 = document.getElementById("countdown2");
    timer = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        countdownElement.innerHTML = `${minutes}:${seconds}`;
        countdownElement2.innerHTML = `${minutes}:${seconds}`;
        if (time === 0) {
            clearInterval(timer);
            timer = null;
            countdownElement.innerHTML = "Resend OTP ";
            countdownElement.style.cursor = "pointer";
            countdownElement.addEventListener("click", restartCountdown);
            countdownElement2.innerHTML = "Resend OTP";
            countdownElement2.style.cursor = "pointer";
            countdownElement2.addEventListener("click", restartCountdown);
        } else {
            time--;
        }
    }, 1000);
}
function stopCountdown() {
    clearInterval(timer);
    timer = null;
    time = 10;
    document.getElementById("countdown").innerHTML = "0:10";
    document.getElementById("countdown").style.cursor = "default";
    document.getElementById("countdown2").innerHTML = "0:10";
    document.getElementById("countdown2").style.cursor = "default";
}
function restartCountdown() {
    time = 10;
    document
        .getElementById("countdown")
        .removeEventListener("click", restartCountdown);
    document.getElementById("countdown").style.cursor = "default";
    document
        .getElementById("countdown2")
        .removeEventListener("click", restartCountdown);
    document.getElementById("countdown2").style.cursor = "default";
    startCountdown();
}