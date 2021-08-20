import Checklist from "./pages/Checklist";

var profileBtn = document.querySelector(".header__profile_button");
var profileMenu = document.querySelector(".header__profile_menu");
var menuBackdrop = document.querySelector(".header__profileMenu_backdrop");
var menuCloseBtn = document.querySelector(".menu__close");
var aboutUsBtn = document.querySelector(".footer__about");
var contactUsBtn = document.querySelector(".footer__contact");
var donateBtn = document.querySelector(".footer__donate");
var hiringBtn = document.querySelector(".footer__hiring");
var faqBtn = document.querySelector(".header__profile_faq");
var termsBtn = document.querySelector(".header__profile_terms");
var checklistBtn = document.querySelector(".header__profile_checklist");
var startBtn = document.querySelector(".header__start");
var startMenu = document.querySelector(".menu");

function openStartMenu() {
  startMenu.style.display = "block";
}

function hideStartButton() {
  startBtn.style.display = "none";
  console.log("close");
}
startBtn.addEventListener("click", () => {
  openStartMenu();
  hideStartButton();
});

function openProfileMenu() {
  profileMenu.style.display = "block";
  menuBackdrop.style.display = "block";
}

function closeProfileMenu() {
  profileMenu.style.display = "none";
  menuBackdrop.style.display = "none";
}

profileBtn.addEventListener("click", () => {
  openProfileMenu();
});

menuBackdrop.addEventListener("click", () => {
  closeProfileMenu();
});

menuCloseBtn.addEventListener("click", () => {
  closeProfileMenu();
});

aboutUsBtn.addEventListener("click", () => {
  closeProfileMenu();
});

contactUsBtn.addEventListener("click", () => {
  closeProfileMenu();
});

donateBtn.addEventListener("click", () => {
  closeProfileMenu();
});

hiringBtn.addEventListener("click", () => {
  closeProfileMenu();
});

faqBtn.addEventListener("click", () => {
  closeProfileMenu();
});

termsBtn.addEventListener("click", () => {
  closeProfileMenu();
});

checklistBtn.addEventListener("click",() => {
closeProfileMenu();
});