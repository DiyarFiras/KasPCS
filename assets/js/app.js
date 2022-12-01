let navLink = document.querySelectorAll(".nav-link ");
let bigLList = document.querySelectorAll(".big-list");

let brgerNav = document.querySelector(".brger");
let navBar = document.querySelector(".navbar-menu");

if (window.innerWidth > 1000) {
    let photoUniversai = document.querySelector(".photo-Universai");
    photoUniversai.setAttribute("data-aos","fade-right");
    let containerUniversai = document.querySelector(".container-Universai"); 
    containerUniversai.setAttribute("data-aos","fade-left");

    let photoComplete = document.querySelector(".photo-Complete");
    photoComplete.setAttribute("data-aos","fade-left");
    let containerComplete = document.querySelector(".container-Complete"); 
    containerComplete.setAttribute("data-aos","fade-right");

    let photoEasy = document.querySelector(".photo-Easy");
    photoEasy.setAttribute("data-aos","fade-right");
    let containerEasy = document.querySelector(".container-Easy"); 
    containerEasy.setAttribute("data-aos","fade-left");
    
    let photoReliable = document.querySelector(".photo-Reliable");
    photoReliable.setAttribute("data-aos","fade-left");
    let containerReliable = document.querySelector(".container-Reliable"); 
    containerReliable.setAttribute("data-aos","fade-right");


    let pricePlan = document.querySelector(".plan");
    pricePlan.setAttribute("data-aos","fade-right");

    let features = document.querySelector(".features");
    features.setAttribute("data-aos","fade-right");

    let advanced = document.querySelector(".advanced");
    advanced.setAttribute("data-aos","fade-right");

    let premium = document.querySelector(".premium");
    premium.setAttribute("data-aos","fade-right");

    let plus = document.querySelector(".plus");
    plus.setAttribute("data-aos","fade-right");

    let basic = document.querySelector(".basic");
    basic.setAttribute("data-aos","fade-right");


    let imgOffer = document.querySelector(".img-offer");
    imgOffer.setAttribute("data-aos","fade-right");

    let textOffer = document.querySelector(".text-offer");
    textOffer.setAttribute("data-aos","fade-left")

    let imgOffer2 = document.querySelector(".img-offer2");
    imgOffer2.setAttribute("data-aos","fade-left");

    let textOffer2 = document.querySelector(".text-offer2");
    textOffer2.setAttribute("data-aos","fade-right")

    let cardimg = document.querySelectorAll(".hello");
    cardimg.forEach(function (img) {
        img.setAttribute("data-aos","fade-down")
    });

    let cardImgCompany = document.querySelectorAll(".prolook");
    cardImgCompany.forEach(function (img) {
        img.setAttribute("data-aos","fade-down")
    });
}

if (window.innerWidth > 1000) {



    function scrollNavbar () {
        let header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 1) {
            header.classList.add("sticky-navbar");
        } else {
            header.classList.remove("sticky-navbar");
        };
    });
    };
    scrollNavbar();


    navLink.forEach(function (link) {
        link.addEventListener("click", function () {
            
            let colorLink = link.querySelector(".nav-title")
            let bigList = link.querySelector(".big-list");
            let LineHover = link.querySelector(".line-hover")
            if (bigList.classList.contains("fadein")) {
                bigList.classList.remove("fadein")
                gsap.to(LineHover, {opacity: 1})
                gsap.to(colorLink , {color: "blue"})
            } else {
                bigList.classList.add("fadein")
                LineHover.classList.add("fadein")
                gsap.to(LineHover, {opacity: 0})
                gsap.to(colorLink , {color: "black"})
            }
        });
    });
} else {

    brgerNav.addEventListener("click", function () {
        navBar.classList.toggle("flex")
    });
    navLink.forEach(function (link) {
        link.addEventListener("click", function () {
            let colorLink = link.querySelector(".nav-title")
            let bigList = link.querySelector(".big-list");
            if (bigList.classList.contains("fadein")) {
                bigList.classList.remove("fadein")
                bigList.classList.add("flex");
                gsap.to(colorLink , {color: "blue"})
            } else {
                bigList.classList.add("fadein")
                bigList.classList.remove("flex");
                gsap.to(colorLink , {color: "black"})
            }
        });
    });
}

// function fadein () {
//     for(let i = 0; i < bigLList.length; i++) {
//         bigLList[i].classList.add("fadein")
//     }
// }
