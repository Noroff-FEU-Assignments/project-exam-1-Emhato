// Hamburger menu

const hamburger = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-times");
const navigation = document.querySelector("nav")
const navBareMobile = document.querySelector(".top-nav-mobile");


function hamburgerClicked() {
    navigation.style.display = "block";
    hamburger.style.display = "none";
    cross.style.display = "block";
    navBareMobile.style.backgroundColor = "#FEE6CC";
    navBareMobile.style.backgroundImage = "none"
}

hamburger.addEventListener("click", hamburgerClicked);

function crossClicked() {
    navigation.style.display = "none";
    hamburger.style.display = "block";
    cross.style.display = "none";
    navBareMobile.style.backgroundImage = "url(/images/sunrise.jpg)"
}

cross.addEventListener("click", crossClicked);


