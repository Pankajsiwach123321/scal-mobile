import './style.css'
import { register } from 'swiper/element/bundle';
register();
let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let loadtake = document.querySelector(".nav-logo")
let finish = document.querySelectorAll(".finish");
let bgbody = document.querySelector(".bg-bodys");
let fix1 = document.querySelector(".fix1");
let fix2 = document.querySelector(".fix2");
let fix3 = document.querySelector(".fix3");
nav.addEventListener("click", function () {
    menubar.classList.toggle("showme")
    menubar.classList.toggle("max-sm:-left-[100%]")
    fix1.classList.toggle("fixer1")
    fix2.classList.toggle("fixer2")
    fix3.classList.toggle("fixer3")
    bgbody.classList.toggle("over-flow")
})

finish.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.toggle("showme")
        menubar.classList.toggle("max-sm:-left-[100%]")
        fix1.classList.toggle("fixer1")
        fix2.classList.toggle("fixer2")
        fix3.classList.toggle("fixer3")
        bgbody.classList.toggle("over-flow")
    })
});
let accordion = document.querySelectorAll(".accordion-items")
accordion.forEach(function (show) {
    show.addEventListener("click", function () {
        const hide = document.querySelector(".active")
        show.classList.add("active")
        hide && hide.classList.remove("active")
    })
})
setInterval(() => {
    const active = document.querySelector(".active")
    active.addEventListener("click", function () {
        active.classList.add('active')
    })
});
let accordion2 = document.querySelectorAll(".accordion-items2")
accordion2.forEach(function (show2) {
    show2.addEventListener("click", function () {
        const hide = document.querySelector(".active2")
        show2.classList.add("active2")
        hide && hide.classList.remove("active2")
    })
})

// preloder
setTimeout(() => {
    document.getElementById("preloder").classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
}, 5000);

function backtop() {
    window.scrollTo(0, 0);
}
window.addEventListener("scroll", function () {
    const mybackto = document.getElementById("backtops");
    if (window.scrollY > 500) {
        mybackto.style.display = "block";
    }
    else {
        mybackto.style.display = "none";
    }
});


