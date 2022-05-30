const hamburger = document.querySelector("#btn-hamburger");
const navBar = document.querySelector("#navbar");


// WHEN (hamburger is clicked)
hamburger.addEventListener("click", () => {
// Check if the navbar is open or close
    const navBarOpen = navBar.getAttribute("menu-visible");
    
    if (navBarOpen === "false") {
        navBar.setAttribute("menu-visible", true);
        console.log(navBarOpen);
         
    } else {
        navBar.setAttribute("menu-visible", false);
        console.log(navBarOpen);
    }
});


