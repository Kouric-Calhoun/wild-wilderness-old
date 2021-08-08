// import lightingFire from '../../images/lightingFire.jpg';
import waterProcurement from '../../images/waterProcurement.jpg';
// import shelterLinkPic from '../../images/shelterLinkPic.jpg';
// import regionsLinkPic from '../../images/regionsLinkPic.jpg';
// import scenariosLinkPic from '../../images/scenariosLinkPic.jpg';




export default function Skills() {
  return `
    <h1>Survival Skills</h1>

    <div class ="skills-main">
      <div class="card">
        <img class="fire-link-pic" src ='$-{lightingFire}'>
        <h3>How to safely build a fire</h3>
        <button class="skills-btn-links_Fire">How to build a Fire</button>
      </div>
      
      <div class="card">
        <img class="fire-link-pic" src = ${waterProcurement}>
        <h3>How to procure water</h3>
        <button class = "skills-btn-links_Water">Water Procurement</button>
      </div>
    
      <div class="card">
        <img class="fire-link-pic" src ='$-{shelterLinkPic}'>
        <h3>How to find/make shelter</h3>
        <button class = "skills-btn-links_Shelter">Shelter</button>
      </div>
      
      <div class="card">
        <img class="fire-link-pic" src ='$-{regionsLinkFood}'>
        <h3>How to find food</h3>
        <button class = "skills-btn-links_Food">Food</button>
      </div>
    
      <div class="card">
        <img class="fire-link-pic" src ='$-{scenariosLinkPredator}'>
        <h3>How to avoid predators</h3>
        <button class = "skills-btn-links_Predators">Predators</button>
      </div>
    </div>
    `;
}