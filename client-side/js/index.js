import Footer from "./components/Footer";
import Header from "./components/Header";

buildPage();

function buildPage() {
  header();
  footer();
}

function header() {
  const headerElement = document.querySelector(".header");
  headerElement.innerHTML = Header();
}

function footer() {
  const footerElement = document.querySelector(".footer");
  footerElement.innerHTML = Footer();
}
