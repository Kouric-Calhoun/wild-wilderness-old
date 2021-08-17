import header from "../../css/header.css";
import headerImage from "../../images/headerImage.jpg";

export default function Header() {
  return `
  <div class="header__section_profile">
    <button class="header__profile_button">Profile</button>
      <div class="header__profileMenu_backdrop"></div>
      <div class="header__profileBtn_content">
        <ul class="header__profile_menu">
          <li class="header__start">Profile
            <span class="menu__close"><i class="fas fa-time"></i></span>
          </li>
          <li class="footer__about">About Us</li>
          <li class="footer__contact">Contact Us</li>
          <li class="header__profile_faq">FAQ</li>
          <li class="header__profile_terms">Terms & Conditions</li>
          <li class="header__profile_checklist">Checklist</li>
          
        </ul>
      </div>
    </div>
    <div class="background-pic">
    <img class="headerImageSize" src="${headerImage}"/>
    <h1 class="header__title">WILDERNESS WILD</h1>
    <ul class ='nav-list'>
    <li class ='nav-list__home'>Home</li>
    <li class ='nav-list__skills'>Skills</li>
    <li class ='nav-list__regions'>Regions</li>
    <li class ='nav-list__scenarios'>Search</li>
    <li class ='nav-list__blog'>Blog</li>
    </ul>
    </div>

    `;
}
