import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Scenarios from "./components/Scenarios";
import Regions from "./components/Regions";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";

buildPage();

function buildPage() {
  header();
  footer();
  navHome();
  navSkills();
  navScenarios();
  navRegions();
  navBlog();
  footerAbout();
  footerContact();
}

function header() {
  const headerElement = document.querySelector(".header");
  headerElement.innerHTML = Header();
}

function footer() {
  const footerElement = document.querySelector(".footer");
  footerElement.innerHTML = Footer();
}

function navHome() {
  const homeElem = document.querySelector(".nav-list__home");
  homeElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Home();
  });
}

function navSkills() {
  const skillsElem = document.querySelector(".nav-list__skills");
  skillsElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Skills();
  });
}

function navScenarios() {
  const scenariosElem = document.querySelector("nav-list__scenarios");
  scenariosElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Scenarios();
  });
}

function navRegions() {
  const regionsElem = document.querySelector("nav-list__regions");
  regionsElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Regions();
  });
}

function navBlog() {
  const blogElem = document.querySelector("nav-list__blog");
  blogElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Blog();
  });
}

function footerAbout() {
  const footerAboutElm = document.querySelector(".footer__about");
  footerAboutElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = About();
  });
}

function footerContact() {
  const footerContactElm = document.querySelector(".footer__contact");
  footerContactElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Contact();
  });
}
