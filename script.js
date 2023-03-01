// VARIABLES
const body = document.body;
const hamburgerBtn = document.querySelector("#btn-hamburger");
const navBar = document.querySelector("#navbar");
const hambTop = document.querySelector("#hamburger-top");
const hambMid = document.querySelector("#hamburger-middle");
const hambBtm = document.querySelector("#hamburger-bottom");
const hambBars = [hambTop, hambMid, hambBtm];


hamburgerBtn.addEventListener("click", (e) => {  
    const navBarState = navBar.getAttribute("state");

    if (navBarState === "closed") {
        openNavBar(e, navBar, hambBars)
    } 

    else if (navBarState === "open") {
        closeNavBar(e, navBar, hambBars)
    }
});



document.addEventListener("click", (e) => {
    const navBarIds = ["mobile-nav-menu", "btn-hamburger", "hamburger-top", "hamburger-middle", "hamburger-bottom", "navbar", "navigation"];

    console.log(e.target)

    if (navBarIds.every(idName => e.target.id !== idName)) {
        closeNavBar(e, navBar, hambBars)
    }
})



function openNavBar(e, navBar, hambBars) {
    e.target.setAttribute("aria-expanded", "true")
    navBar.setAttribute("state", "open")
    hambBars.forEach(bar => {
        bar.setAttribute("state", "cross")
    })
}

function closeNavBar(e, navBar, hambBars) {
    e.target.setAttribute("aria-expanded", "false")
    navBar.setAttribute("state", "closed")
    hambBars.forEach(bar => {
        bar.setAttribute("state", "hamburger")
    })
}