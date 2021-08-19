export default function WaterQuiz() {
    return `
    <center><h1 class ="quiz-name-water">Survival Water Skill Quiz</h1></center>
    <div class ="water-quiz">
    <div class="question-container-water">
    <h3 class="question-water">Question 1: Which water contains algae that harbor microorganisms and can clog water 
    filters and reduce the effectiveness of chemicals?</h3>
    <input type="radio" name="question1">Sludgy water<br>
    <input type="radio" name="question1" >Brownish water<br>
    <input type="radio" name="question1" id="correct1">Greenish water<br>
    <input type="radio" name="question1" >Water from beaver streams<br>
    </div>

    <div class="question-container-water">
    <h3 class="question-water">Question 2: How do water purification tablets work?</h3>
    <input type="radio" name="question2" >By adding good bacteria<br>
    <input type="radio" name="question2" id="correct2">By releasing free chlorine into the water to quickly kill most 
    pathogens<br>
    <input type="radio" name="question2" >By bleaching your water<br>
    <input type="radio" name="question2">By separating the bacteria and water<br>
    </div>

    <div class="question-container-water">
    <h3 class="question-water">Question 3: Why is it important NOT to drink water with high levels of sodium and minerals?</h3>
    <input type="radio" name="question3" >It won't taste very good<br>
    <input type="radio" name="question3">You could get sick<br>
    <input type="radio" name="question3" >You'll be salty<br>
    <input type="radio" name="question3"id="correct3">This could cause you to become dehydrated<br>
    </div>

    <div class="question-container-water">
    <h3 class="question-water">Question 4: How long can you last without water before the body begins to shut down from dehydration?</h3>
    <input type="radio" name="question4" >2 days<br>
    <input type="radio" name="question4" id="correct4">3 days<br>
    <input type="radio" name="question4" >1 week<br>
    <input type="radio" name="question4" >5 days<br>
    </div>

    <div class="question-container-water">
    <h3 class="question-water">Question 5: Which of these are acceptable methods of water procurement?</h3>
    <input type="radio" name="question5" id="correct5">Boiling, distillation and collecting rainwater<br>
    <input type="radio" name="question5" >Drinking from puddles<br>
    <input type="radio" name="question5" >Drinking from a lake<br>
    <input type="radio" name="question5" >Finding clear water tumbling over sunny rocks<br>
    </div>

    </div>
    <br>
    <div class="submit_quiz">
    <input class="submit_Btn" type="submit" name="submit" value="Submit Quiz" id="result">
    <h1 class="number_right" id="number_correct"></h1>
    </div>
    <br>
    <div class="skills-btn-links_Fire"><< Fire</div>
    <div class="skills-btn-links_Water">Water</div>
    <div class="skills-btn-links_Shelter">Shelter >></div>


    `;
}