// VARIABLES
const body = document.body;
const hamburger = document.querySelector("#btn-hamburger");
const navBar = document.querySelector("#navbar");
const hambTop = document.querySelector("#hamburger-top");
const hambMid = document.querySelector("#hamburger-middle");
const hambBtm = document.querySelector("#hamburger-bottom");


body.addEventListener("click", () => {
    const navBarOpen = navBar.getAttribute("state");

    console.log(navBarOpen);

    /* if (navBarOpen === "open") {
        navBar.setAttribute("state", "closed");
    } */
})

// GETTING THE MOBILE NAV MENU WORKING
// WHEN (hamburger is click ed)
hamburger.addEventListener("click", () => {
    // Check navBar visibility
    const navBarOpen = navBar.getAttribute("state");

    // Change the state
    // If the navbar is closed, open it
    if (navBarOpen === "closed" || navBarOpen === "none") {
        navBar.setAttribute("state", "open");
    
    // If the navbar is open, close it
    } else if (navBarOpen === "open") {
        navBar.setAttribute("state", "closed");
    }

    // Change the toggle button
    const hambButtons = [hambTop, hambMid, hambBtm];
    hambButtons.forEach(button => {
        // Get the states of the hamburger button
        let btnState = button.getAttribute("state");

        // If it is hamburger, change it to cross
        if (btnState === "hamburger") {
            button.setAttribute("state", "cross");
        
        // If it is cross, change it to hamburger
        } else if (btnState === "cross") {
            button.setAttribute("state", "hamburger");
        }
    })
});



document.addEventListener("click", (e) => {
    const navBarIds = ["mobile-nav-menu", "btn-hamburger", "hamburger-top", "hamburger-middle", "hamburger-bottom", "navbar", "navigation"];

    if (navBarIds.every(idName => e.target.id !== idName)) {
        navBar.setAttribute("state", "closed");
    }
})


