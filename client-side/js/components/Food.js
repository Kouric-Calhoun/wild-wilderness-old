import DeerAntlers from "../../images/DeerAntlers.jpg"
import wires from "../../images/wires.jpg"
import PencilLoop from "../../images/PencilLoop.jpg"
import snarediagram1 from "../../images/snarediagram1.jpg"
import SnareTrigger from "../../images/SnareTrigger.jpg"

export default function Food() {
    return ` 
    <div class="container">
    <div class="food-gathering-title">
    <h1 class = "food-title">Simple Ways to Catch Game in the Wild</h1>
    <img src='${DeerAntlers}'></img>
    
    <article class = "intro-snare">
    <p>While constructing a survival snare is fairly simple, it is often 
     oversimplified with vague instructions and limited photos. By the time
     you finish reading this article you will know how to make the simplest and most efficient 
     survival snare known to man. If your knowledge ever crosses paths with necessity, this may prove useful.</p>
     <br>

     <p2>For short term survival (1-7 days), food is not a critical priority.  Shelter, water, fire, and signaling are typically more immediate concerns.  
     At some point, though, you must put calories on the human furnace or suffer the debilitating consequences of starvation.</p2>
     <br>

     <p3>There isn’t one single primitive culture, tribe, or people where meat is/was not a critical component of their diet.  Modern equipment,
     farming, transportation, food processing, supplements, and complex supply chains give us the option not to eat meat if we choose.  Remove these luxuries 
     for an extended period of time and the calories from meat once again become necessary for survival.  It would be extremely difficult, if not impossible, 
     to source enough calories in a primitive survival scenario by gathering wild plant edibles alone–especially in cold weather climates or seasons.</p3>
     <br>

     <p4>Time and energy conservation are both very important factors to consider in any survival situation. This is precisely why snares are such an important survival
     tool.  Once constructed and set, a snare will allow you to focus on other survival priorities. And, it will keep working even while you are sleeping. With 10 snares
     you can be hunting in 10 different locations at the same time while expending ZERO energy. You become a one man hunting party. Snares are a survivor’s secret weapon.  
     Not only are snares incredibly reliable and effective, they also require very few resources to build–in materials, energy, and time.</p4>
     </article>
     
     <article class = "types-of-snares">
     <h2 class = "trigger-spring-snare">The Simplest Snare Design</h2>
     <p>There are literally hundreds of different snare sets and designs–some of which are overly complex.
      If you only learn one snare design in your life, it should be what I call the Trigger Spring Snare.</p>
     </article>

     <article class = "instructions-for-snare">
     <h2 class = "trigger-snare-components">Trigger Snare Components</h2>
     <p>The Trigger Spring Snare consists of 4 components which can be readily sourced in nearly any survival situation. 
     These components are:</p>
     <br>
    <ol>
     <li>The Noose (made from some kind of cordage–preferably wire)</li>
     <li>The 2 Part Trigger (carved from wood)</li>
     <li>The Leader Line (also made from some kind of cordage)</li>
     <li>The Engine (typically a bent over sapling)</li>
     </ol>
     </article>

     <article class = "snare-noose">
     <h2 class = "noose"> Step 1: Making the Noose</h2>
     
     <p>The noose does exactly what you think–it nooses the animal.  The most effective noose material is wire.
      here are many different types of wire that will work.  The wire must be flexible.  It cannot be too thick
      or brittle.  When set in the shape of a noose (shown later), it must tighten easily and quickly when pulled upon. 
      Some examples are:</p>
      <ol>
      <li>Twisted copper strands from the inside of an everyday lamp or small appliance power cord</li>
      <li>Picture hanging wire</li>
      <li>Stripped wire from car or vehicle electrical systems</li>
      <li>Headphone wire</li>
      <li>Wire from a spiral bound note pad</li>
      <li>Wire reinforced bras</li>
      </ol>
      <img src='${wires}'></img>
      <br>
      <p>If wire is unavailable, some kind of string or cord will have to do.  It must be strong enough to hold
       a 5-8 lb animal.  If it snaps under the force of a couple jerks between your fists then it probably won’t work well.</p>
       <br>
       <p>The average length of your noose cord needs to be 18-24 inches for most small game animals. To construct your noose you need to make
        a small loop in one end about the diameter of a pencil.  With wire you can simple make the loop and twist the wire back on itself several times.</p>
      <img src='${PencilLoop}'><img>
        </article>

      <article class = "trigger-lead">
      <h2>Step 2: Trigger and Leader Line</h2>
      <p>The trigger consists of 2 parts: the HOOK and the BASE.  As you can see in the diagram below, the LEADER LINE is tied to the top of the HOOK
      and the NOOSE is tied to the bottom of the HOOK.  The ENGINE (typically a bent over sapling) provides tension to the HOOK which is secured under
      the BASE–until an animal disengages it by pulling on the NOOSE.  The LEADER LINE from the HOOK to the ENGINE can be any type of cordage.  It needs
      to be strong enough to withstand the initial “spring jerk” and then the weight of the suspended (and struggling) animal.</p>
      <img src='${snarediagram1}'><img> 
      <h3>Trigger Method</h3>
      <p>Simply find 2 sticks that branch how you need them and let nature provide your trigger system.  The noose in this photo is made from the fibers of
       a raffia palm tree.  This base is also staked into the ground.</p>
       <img src='${SnareTrigger}'><img>
       </article>

       <article class ="snare-engine">
       <h2>Step 3: The Engine</h2>
       <p>Every environment is different and unique.  There may not be a sapling to bend over along a game trail.  Or, you may be in the middle of a prairie
       or field where there are no trees at all.  If so, you must improvise.  There are many ways to do this.  One way is to simply cut down a green sapling
       or branch from another area and stake it in the ground to use as an ENGINE.  Your LEADER LINE can also be weighted and run over a branch or make-shift 
       tripod to serve the same purpose.  In the photo below I’ve weighted the LEADER LINE with a 10 pound rock that applies tension to the TRIGGER. Use the bark
       from a root as the LEADER LINE and a NOOSE made from braided cattail leaves–this is a 100% primitive snare set.</p>
       </article>
    <div class ="skills-main">
        <h3>Take a Quiz on how to Find Food</h3>
        <button class="quiz-btn-links_Food">Quiz</button>
      </div>
      </div>
    `;
}