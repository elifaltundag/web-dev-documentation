// VARIABLES
const hamburger = document.querySelector("#btn-hamburger");
const navBar = document.querySelector("#navbar");
const hambTop = document.querySelector("#hamburger-top");
const hambMid = document.querySelector("#hamburger-middle");
const hambBtm = document.querySelector("#hamburger-bottom");

// GETTING THE MOBILE NAV MENU WORKING
// WHEN (hamburger is clicked)
hamburger.addEventListener("click", () => {
    // Check navBar visibility
    const navBarOpen = navBar.getAttribute("state");

    // If the navbar is closed, open it
    if (navBarOpen === "closed") {
        navBar.setAttribute("state", "open");
    
     
    // If the navbar is open, close it
    } else {
        navBar.setAttribute("state", "closed");
    
    }

    // Get the states of the hamburger button
    const hambTopState = hambTop.getAttribute("state");
    const hambMidState = hambMid.getAttribute("state");
    const hambBtmState = hambBtm.getAttribute("state");
    
    if (hambTopState === "hamburger") {
        hambTop.setAttribute("state", "cross");
    } else if (hambTopState === "cross") {
        hambTop.setAttribute("state", "hamburger");
    }

    if (hambMidState === "hamburger") {
        hambMid.setAttribute("state", "cross");
    } else if (hambMidState === "cross") {
        hambMid.setAttribute("state", "hamburger");
    }

    if (hambBtmState === "hamburger") {
        hambBtm.setAttribute("state", "cross");
    } else if (hambBtmState === "cross") {
        hambBtm.setAttribute("state", "hamburger");
    }

    
});


