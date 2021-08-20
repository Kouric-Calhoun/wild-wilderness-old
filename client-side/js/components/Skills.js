import lightingFire from '../../images/lightingFire.jpg';
import drinkingWater from '../../images/drinkingWater.jpg';
import shelterLinkPic from '../../images/shelterLinkPic.jpg';
import foodLinkPic from '../../images/foodLinkPic.jpg';
import predatorLinkPic from '../../images/predatorLinkPic.jpg';




export default function Skills() {
  return `
    <h1 class="survival-skills-title">Survival Skills</h1>

    <div class ="skills-main">

    <div class="skills-container-1">
    
      <div class="card">
        <img class="fire-link-pic" src ='${lightingFire}'>
        <h3 class="skills-h3">How to build a fire</h3>
          <p class ="fire-card-text">King of survival techniques! Fire can purify water, cook food, signal rescuers,
         provide warmth, light, and comfort. It can also help keep predators at a distance and can be 
         a most welcome friend and companion. As a survival technique, it is one that is essential.</p>
        <button class="skills-btn-links_Fire">Read More</button>
      </div>
      
      <div class="card">
        <img class="fire-link-pic" src = '${drinkingWater}'>
        <h3 class="skills-h3">Procuring water</h3>
          <p class="water-card-text">In any survival scenario, water is by far your most important resource. You can easily
        go a day without food, and usually don't need shelter right away, unless you're in freezing conditions. It is
        used for cooking food, cleaning utensils and helping to maintain personal hygiene.</p>
        <button class = "skills-btn-links_Water">Read More</button>
      </div>
    
      <div class="card">
        <img class="fire-link-pic" src ='${shelterLinkPic}'>
        <h3 class="skills-h3">Finding shelter</h3>
        <p class="shelter-card-text">If you find yourself in the wild, in extreme climate conditions, you should 
        find or make a shelter. A good shelter will protect you from a variety of uncontrollable factors such as
        shade from the sun and a shield from icy, cold winds and low tempuratures.</p>
        <button class = "skills-btn-links_Shelter">Read More</button>
    </div>
    </div>


    <div class="skills-container-2">
      <div class="card">
        <img class="fire-link-pic" src ='${foodLinkPic}'>
        <h3 class="skills-h3">How to find food</h3>
        <p class="food-card-text">Knowing core survival foods is a key to wilderness survival. 
        Though humans can survive for up to three weeks without food, we probably wouldn't choose to go that
         long. Most natural environments are filled with a variety of items that can meet our nutritional needs.</p>
        <button class = "skills-btn-links_Food">Read More</button>
      </div>
    
      <div class="card">
        <img class="fire-link-pic" src ='${predatorLinkPic}'>
        <h3 class="skills-h3">Avoiding predators</h3>
        <p class="predator-card-text">Wild animal encounters can range from awe-inspiring to scary, with physical
        danger as well as wildlife carrying diseases that could get you sick. Knowing 
        ahead of time what to do can take some of the fear out of seeing these animals in the wild. </p>
        <button class = "skills-btn-links_Predators">Read More</button>
      </div>
      </div>
    </div>
    `;
}