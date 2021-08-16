import lightingFire from '../../images/lightingFire.jpg';
import drinkingWater from '../../images/drinkingWater.jpg';
import shelterLinkPic from '../../images/shelterLinkPic.jpg';
import foodLinkPic from '../../images/foodLinkPic.jpg';
import predatorLinkPic from '../../images/predatorLinkPic.jpg';




export default function Skills() {
  return `
    <h1>Survival Skills</h1>

    <div class ="skills-main">

    <div class="skills-container-1">
      <div class="card">
        <img class="fire-link-pic" src ='${lightingFire}'>
        <h3 class="skills-h3">How to build a fire</h3>
        <button class="skills-btn-links_Fire">How to build a Fire</button>
      </div>
      
      <div class="card">
        <img class="fire-link-pic" src = '${drinkingWater}'>
        <h3 class="skills-h3">Procuring water</h3>
        <button class = "skills-btn-links_Water">Water Procurement</button>
      </div>
    
      <div class="card">
        <img class="fire-link-pic" src ='${shelterLinkPic}'>
        <h3 class="skills-h3">Find or make shelter</h3>
        <button class = "skills-btn-links_Shelter">Shelter</button>
    </div>
    </div>


    <div class="skills-container-2">
      <div class="card">
        <img class="fire-link-pic" src ='${foodLinkPic}'>
        <h3 class="skills-h3">How to find food</h3>
        <button class = "skills-btn-links_Food">Food</button>
      </div>
    
      <div class="card">
        <img class="fire-link-pic" src ='${predatorLinkPic}'>
        <h3 class="skills-h3">Avoiding predators</h3>
        <button class = "skills-btn-links_Predators">Predators</button>
      </div>
      </div>
    </div>
    `;
}