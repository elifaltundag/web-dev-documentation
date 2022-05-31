// VARIABLES
const hamburger = document.querySelector("#btn-hamburger");
const navBar = document.querySelector("#navbar");
const hambTop = document.querySelector("#hamburger-top");
const hambMid = document.querySelector("#hamburger-middle");
const hambBtm = document.querySelector("#hamburger-bottom");


// MAKE IT WORK ON MOBILE ONLY
const mediaQuery = window.matchMedia("(min-width: 850px)");

if (mediaQuery.matches) {
// GETTING THE MOBILE NAV MENU WORKING
// WHEN (hamburger is clicked)
hamburger.addEventListener("click", () => {
    // Check navBar visibility
    const navBarOpen = navBar.getAttribute("state");

    // Change the state
    // If the navbar is closed, open it
    if (navBarOpen === "closed" || navBarOpen === "none") {
        navBar.setAttribute("state", "open");
    
    // If the navbar is open, close it
    } else {
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

}


