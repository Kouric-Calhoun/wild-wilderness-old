export default function Quiz() {
    return `
    <center><h1 class ="quiz-name">Survival Skill Quiz</h1></center>
    <div class ="survival-quiz">

    <div class="question-container-one">
    <h3 class="question">Question 1: Which three things make a "fire triangle"?</h3>
    <input type="radio" name="question1">Fuel, Shelter, and branches<br>
    <input type="radio" name="question1" >Oxygen, Fuel, and H20<br>
    <input type="radio" name="question1" id="correct1">Oxygen, Fuel, and ignition source<br>
    <input type="radio" name="question1" >Matches, a lighter and a flare gun<br>
    </div>

    <div class="question-container-two">
    <h3 class="question">Question 2: What type of bark burns when it is wet?</h3>
    <input type="radio" name="question2" >Red Oak Bark<br>
    <input type="radio" name="question2" id="correct2">Birch Bark<br>
    <input type="radio" name="question2" >Maple Bark<br>
    <input type="radio" name="question2">Pine Bark<br>
    </div>

    <div class="question-container-three">
    <h3 class="question">Question 3: Which type of sap can be used as a good firestarter?</h3>
    <input type="radio" name="question3" >Pine Sap<br>
    <input type="radio" name="question3">Oak Sap<br>
    <input type="radio" name="question3" >Maple Sap<br>
    <input type="radio" name="question3"id="correct3">Spruce Sap<br>
    </div>

    <div class="question-container-one">
    <h3 class="question">Question 4: How long can you last without water before the body begins to shut down from dehydration?</h3>
    <input type="radio" name="question4" >2 days<br>
    <input type="radio" name="question4" id="correct4">3 days<br>
    <input type="radio" name="question4" >1 week<br>
    <input type="radio" name="question4" >5 days<br>
    </div>

    <div class="question-container-two">
    <h3 class="question">Question 5: Which of these are acceptable methods of water procurement?</h3>
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
    
`;
}