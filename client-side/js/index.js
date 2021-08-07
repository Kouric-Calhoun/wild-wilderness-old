import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Scenarios from "./components/Scenarios";
import Regions from "./components/Regions";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import Donate from "./pages/Donate";
import Event from "./pages/Event";
import Hiring from "./pages/Hiring";
import apiActions from "./api-actions/api-actions.js";

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
  quizPage();
  survivalQuiz();
  footerDonate();
  footerEvent();
  footerHiring();
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
    console.log("test");
    app.innerHTML = Skills();
  });
}

function navScenarios() {
  const scenariosElem = document.querySelector(".nav-list__scenarios");
  scenariosElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Scenarios();
  });
}

function navRegions() {
  const regionsElem = document.querySelector(".nav-list__regions");
  regionsElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Regions();
  });
}

function navBlog() {
  const blogElem = document.querySelector(".nav-list__blog");
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

function quizPage() {
  const quizElem = document.querySelector(".nav-list__quiz");
  quizElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Quiz();
  });
}

function survivalQuiz() {
  const app = document.querySelector("#app");
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("submit_Btn")) {
      var score = 0;
      if (document.getElementById("correct1").checked) {
        score++;
      }
      if (document.getElementById("correct2").checked) {
        score++;
      }
      if (document.getElementById("correct3").checked) {
        score++;
      }
      if (document.getElementById("correct4").checked) {
        score++;
      }
      if (document.getElementById("correct5").checked) {
        score++;
      }
      if (score == 0) {
        number_correct.textContent =
          "Uh oh! I think you need some more practice!";
      } else if (score == 1) {
        number_correct.textContent = "You got one right. Maybe try again?";
      } else if (score == 2) {
        number_correct.textContent =
          "You got two questions right. You might want to study some more.";
      } else if (score == 3) {
        number_correct.textContent = "You got three questions right. Not bad!";
      } else if (score == 4) {
        number_correct.textContent = "You got four questions right. Close!";
      } else {
        number_correct.textContent =
          "Whoa! You got them all! You are on your way to becoming a wilderness survival expert!";
      }
    }
  });
}

function footerDonate() {
  const footerDonateElm = document.querySelector(".footer__donate");
  footerDonateElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Donate();
  });
}

function footerEvent() {
  const footerEventElm = document.querySelector(".footer__event");
  footerEventElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Event();
  });
}

function footerHiring() {
  const footerHiringElm = document.querySelector(".footer__hiring");
  footerHiringElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Hiring();
  });
}
