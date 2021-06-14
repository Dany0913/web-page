let navBurguer = document.getElementsByClassName("header-nav-burguer")[0];
let navMenu = document.getElementsByClassName("header-nav")[0];
console.log(navMenu);

function fnClicNavBurguer() {
  console.log("Clic en burguer " + navMenu.className);
  if (navMenu.className === "header-nav show") {
    return (navMenu.className = "header-nav");
  } else {
    return (navMenu.className += " show");
  }
}

navBurguer.addEventListener("click", fnClicNavBurguer);
navMenu.addEventListener("click", fnClicNavBurguer);
