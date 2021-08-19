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
          <li class="footer__donate">Donate</li>
          <li class="footer__hiring">We Are Hiring</li>
          <li class="header__profile_faq">FAQ</li>
          <li class="header__profile_terms">Terms & Conditions</li>
          <li class="header__profile_checklist">Checklist</li>
        </ul>
      </div>
    </div>
    <div class="background-pic">
    <img class="headerImageSize" src="${headerImage}"/>
    <ul class ='nav-list'>
    <li class ='nav-list__home'>HOME</li>
    <li class ='nav-list__skills'>SKILLS</li>
    <li class ='nav-list__regions'>REGIONS</li>
    <li class ='nav-list__scenarios'>SEARCH</li>
    <li class ='nav-list__blog'>BLOG</li>
    </ul>
    </div>

    `;
}
