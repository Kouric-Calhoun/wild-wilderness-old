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
import Fire from "./components/Fire.js";
import Water from "./components/Water.js";
import Shelter from "./components/Shelter.js";
import Food from "./components/Food.js";
import Predators from "./components/Predators.js";
import FireQuiz from "./pages/Quiz/FireQuiz.js";
import WaterQuiz from "./pages/Quiz/WaterQuiz.js";
import ShelterQuiz from "./pages/Quiz/ShelterQuiz.js";
import FoodQuiz from "./pages/Quiz/FoodQuiz.js";
import PredatorsQuiz from "./pages/Quiz/PredatorsQuiz.js";
import West from "./pages/Regions/West.js";
import Gear from "./components/Gear";
import Midwest from "./pages/Regions/Midwest.js";
import Northeast from "./pages/Regions/Northeast.js";
import Southeast from "./pages/Regions/Southeast.js";
import Southwest from "./pages/Regions/Southwest.js";
import WestAlaskaHawaii from "./pages/Regions/WestAlaskaHawaii.js";
import startGameWest from "./pages/Game/GameWest.js";
import startGameSouthWest from "./pages/Game/GameSouthWest.js";
import startGameMidWest from "./pages/Game/GameMidWest.js";
import startGameSouthEast from "./pages/Game/GameSouthEast.js";
import startGameNorthEast from "./pages/Game/GameNorthEast.js";
import startGameWestAlaskaHawaii from "./pages/Game/GameWestAlaskaHawaii.js";
import NationalParkSearch from "./pages/NationalParkSearch.js";
import Checklist from "./components/Checklist.js";

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
  navAbout();
  navContact();
}

function header() {
  const headerElement = document.querySelector(".header");
  headerElement.innerHTML = Header();
  navChecklist();
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
    renderingGearPage();
  });
}

function navSkills() {
  const skillsElem = document.querySelector(".nav-list__skills");
  skillsElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Skills();
    renderingFirePage();
    renderingWaterPage();
    renderingShelterPage();
    renderingFoodPage();
    renderingPredatorsPage();
    quizPage();
  });
}

function navScenarios() {
  const scenariosElem = document.querySelector(".nav-list__scenarios");
  scenariosElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Scenarios();
    NationalParkSearch();
  });
}

function navRegions() {
  const regionsElem = document.querySelector(".nav-list__regions");
  regionsElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Regions();
    renderingWestPage();
    renderingMidwestPage();
    renderingNortheastPage();
    renderingSoutheastPage();
    renderingSouthwestPage();
    renderingWestAlaskaHawaiiPage();
  });
}

function navBlog() {
  const blogElem = document.querySelector(".nav-list__blog");
  blogElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Blog();
  });
}

function navAbout() {
  const aboutElem = document.querySelector(".header__profile_aboutUs");
  aboutElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = About();
  });
}

function navContact() {
  const contactElem = document.querySelector(".header__profile_contactUs");
  contactElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Contact();
  });
}

function navChecklist() {
  const contactElem = document.querySelector(".header__profile_checklist");
  contactElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Checklist();
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

function renderingFirePage() {
  const fireBtnElm = document.querySelector(".skills-btn-links_Fire");
  fireBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Fire();
    renderingFireQuizPage();
    survivalQuiz();
  });
}

function renderingWaterPage() {
  const waterBtnElm = document.querySelector(".skills-btn-links_Water");
  waterBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Water();
    renderingWaterQuizPage();
    survivalQuiz();
  });
}

function renderingShelterPage() {
  const shelterBtnElm = document.querySelector(".skills-btn-links_Shelter");
  shelterBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Shelter();
    renderingShelterQuizPage();
  });
}

function renderingFoodPage() {
  const foodBtnElm = document.querySelector(".skills-btn-links_Food");
  foodBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Food();
    renderingFoodQuizPage();
    addComment();
    survivalQuiz();
  });
}

function renderingPredatorsPage() {
  const predatorsBtnElm = document.querySelector(".skills-btn-links_Predators");
  predatorsBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Predators();
    renderingPredatorsQuizPage();
  });
}

function renderingFireQuizPage() {
  const fireQuizBtnElm = document.querySelector(".quiz-btn-links_Fire");
  fireQuizBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = FireQuiz();
  });
}

function renderingWaterQuizPage() {
  const waterQuizBtnElm = document.querySelector(".quiz-btn-links_Water");
  waterQuizBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = WaterQuiz();
  });
}

function renderingShelterQuizPage() {
  const shelterQuizBtnElm = document.querySelector(".quiz-btn-links_Shelter");
  shelterQuizBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = ShelterQuiz();
  });
}

function renderingFoodQuizPage() {
  const foodQuizBtnElm = document.querySelector(".quiz-btn-links_Food");
  foodQuizBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = FoodQuiz();
  });
}

function renderingPredatorsQuizPage() {
  const predatorsQuizBtnElm = document.querySelector(
    ".quiz-btn-links_Predators"
  );
  predatorsQuizBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = PredatorsQuiz();
  });
}

function renderingWestPage() {
  const westBtnElm = document.querySelector(".west");
  westBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = West();
    startGameWest();
  });
}

function renderingGearPage() {
  const gearBtnElm = document.querySelector(".home-btn-links_Gear");
  gearBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Gear();
  });
}

function renderingMidwestPage() {
  const westBtnElm = document.querySelector(".midwest");
  westBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Midwest();
    startGameMidWest();
  });
}

function renderingNortheastPage() {
  const westBtnElm = document.querySelector(".northeast");
  westBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Northeast();
    startGameNorthEast();
  });
}

function renderingSoutheastPage() {
  const westBtnElm = document.querySelector(".southeast");
  westBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Southeast();
    startGameSouthEast();
  });
}

function renderingSouthwestPage() {
  const westBtnElm = document.querySelector(".southwest");
  westBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Southwest();
    startGameSouthWest();
  });
}

function renderingWestAlaskaHawaiiPage() {
  const westBtnElm = document.querySelector(".westalaskahawaii");
  westBtnElm.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = WestAlaskaHawaii();
    startGameWestAlaskaHawaii();
  });
}
