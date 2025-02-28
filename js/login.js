
// Email otp js code
const inputs = document.getElementById("inputs");
inputs.addEventListener("input", function (e) {
    const target = e.target;
    const val = target.value;
    if (isNaN(val)) {
        target.value = "";
        return;
    }
    if (val != "") {
        const next = target.nextElementSibling;
        if (next) {
            next.focus();
        }
    }
});
inputs.addEventListener("keyup", function (e) {
    const target = e.target;
    const key = e.key.toLowerCase();
    if (key == "backspace" || key == "delete") {
        target.value = "";
        const prev = target.previousElementSibling;
        if (prev) {
            prev.focus();
        }
        return;
    }
});

// Phone no otp js code
const inputs2 = document.getElementById("inputs2");
inputs2.addEventListener("input", function (e) {
    const target = e.target;
    const val = target.value;
    if (isNaN(val)) {
        target.value = "";
        return;
    }
    if (val != "") {
        const next = target.nextElementSibling;
        if (next) {
            next.focus();
        }
    }
});
inputs2.addEventListener("keyup", function (e) {
    const target = e.target;
    const key = e.key.toLowerCase();
    if (key == "backspace" || key == "delete") {
        target.value = "";
        const prev = target.previousElementSibling;
        if (prev) {
            prev.focus();
        }
        return;
    }
});

// Handle dropdown item click to change selected country code
document.querySelectorAll('#countryCodeDropdown .dropdown-item').forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        var selectedCode = this.getAttribute('data-code');
        document.getElementById('selectedCountryCode').innerText = selectedCode;
    });
});

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
const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const number3 = document.querySelector(".number3");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const p1 = document.querySelector(".progress-text-1");
const p2 = document.querySelector(".progress-text-2");
const p3 = document.querySelector(".progress-text-3");
const check = document.querySelector(".step1");
let current = 1;

nextBtnFirst.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    step1.classList.add("active-color");
    line1.classList.add("active-line");
    p1.classList.add("active-color-p");
    p1.innerHTML = `<i class="check fas fa-check "></i>`;
});
nextBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    step2.classList.add("active-color");
    line2.classList.add("active-line");
    p2.classList.add("active-color-p");
    p2.innerHTML = `<i class="check fas fa-check "></i>`;
});
nextBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    step3.classList.add("active-color");
    p3.classList.add("active-color-p");
    p3.innerHTML = `<i class="check fas fa-check "></i>`;
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
    step1.classList.remove("active-color");
    line1.classList.remove("active-line");
    p1.classList.remove("active-color-p");
    p1.innerHTML = `01`;
});
prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    step2.classList.remove("active-color");
    line2.classList.remove("active-line");
    p2.classList.remove("active-color-p");
    p2.innerHTML = `02`;
});
prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    step3.classList.remove("active-color");
    p3.classList.remove("active-color-p");
    p3.innerHTML = `03`;
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
            countdownElement.innerHTML = "Resend OTP";
            countdownElement.style.cursor = "pointer";
            countdownElement.addEventListener("click", restartCountdown);
            countdownElement2.innerHTML = "Resend OTP ";
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

function triggerFileInput(fileInputId, fileNameId) {
    console.log(fileInputId);
    document.getElementById(fileInputId).addEventListener("change", () => {
        const fileInput = document.getElementById(fileInputId);
        const fileName = fileInput.files[0]?.name || "";
        document.getElementById(fileNameId).value = fileName;
    });
}
//toggle password
document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#id_password");

    togglePassword.addEventListener("click", function () {
        const type =
            password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
    });
});
//toggle confirm password
document.addEventListener("DOMContentLoaded", function () {
    const togglePassword2 = document.querySelector("#togglePassword-2");
    const password2 = document.querySelector("#id_password-2");

    togglePassword2.addEventListener("click", function () {
        const type =
            password2.getAttribute("type") === "password" ? "text" : "password";
        password2.setAttribute("type", type);
    });

});