let navBurguer = document.getElementsByClassName("header-nav-burguer")[0];
let navMenu = document.getElementsByClassName("header-nav")[0];
let linkAbout = document.getElementById("header-about");
let linkSkills = document.getElementById("header-skills");
let linkProjects = document.getElementById("header-projects");
let linkBlog = document.getElementById("header-blog");
let sectionAbout = document.getElementById("about");
let sectionSkills = document.getElementById("skills");
let sectionProjects = document.getElementById("projects");
let sectionBlog = document.getElementById("blog");

let limitAbout = [0, sectionAbout.clientHeight];
let limitSkills = [limitAbout[1], limitAbout[1] + sectionSkills.clientHeight];
let limitProjects = [
  limitSkills[1],
  limitSkills[1] + sectionProjects.clientHeight,
];
let limitBlogs = [
  limitProjects[1],
  limitProjects[1] + sectionBlog.clientHeight,
];

// Function to hyde or show the menu in mobile
function fnClicNavBurguer() {
  if (navMenu.className === "header-nav show") {
    return (navMenu.className = "header-nav");
  } else {
    return (navMenu.className += " show");
  }
}

//Funcion to jump to a selected section
function fnActiveSection() {
  if (this.id === "header-about") {
    sectionAbout.scrollIntoView();
    return window.scrollBy(0, -100);
  } else if (this.id === "header-skills") {
    sectionSkills.scrollIntoView();
    return window.scrollBy(0, -100);
  } else if (this.id === "header-projects") {
    sectionProjects.scrollIntoView();
    return window.scrollBy(0, -100);
  } else {
    sectionBlog.scrollIntoView();
    return window.scrollBy(0, -100);
  }
}

//Funcion that change the color of the nav element acconging to the section
window.onscroll = () => {
  if (
    window.scrollY >= limitAbout[0] &&
    window.scrollY - 100 <= limitAbout[1]
  ) {
    linkAbout.className = "header-nav-item active";
    linkSkills.className = "header-nav-item";
    linkProjects.className = "header-nav-item";
    linkBlog.className = "header-nav-item";
  }
  if (
    window.scrollY - 100 >= limitSkills[0] &&
    window.scrollY - 100 <= limitSkills[1]
  ) {
    linkAbout.className = "header-nav-item";
    linkSkills.className = "header-nav-item active";
    linkProjects.className = "header-nav-item";
    linkBlog.className = "header-nav-item";
  }
  if (
    window.scrollY - 100 >= limitProjects[0] &&
    window.scrollY - 100 <= limitProjects[1]
  ) {
    linkAbout.className = "header-nav-item";
    linkSkills.className = "header-nav-item";
    linkProjects.className = "header-nav-item active";
    linkBlog.className = "header-nav-item";
  }
  if (
    window.scrollY - 100 >= limitBlogs[0] &&
    window.scrollY <= limitBlogs[1]
  ) {
    linkAbout.className = "header-nav-item";
    linkSkills.className = "header-nav-item";
    linkProjects.className = "header-nav-item";
    linkBlog.className = "header-nav-item active";
  }
};

navBurguer.addEventListener("click", fnClicNavBurguer);
navMenu.addEventListener("click", fnClicNavBurguer);
linkAbout.addEventListener("click", fnActiveSection);
linkSkills.addEventListener("click", fnActiveSection);
linkProjects.addEventListener("click", fnActiveSection);
linkBlog.addEventListener("click", fnActiveSection);
document.getElementById("main").addEventListener("scroll", fnActiveNavColor);
