export default function FireQuiz() {
        return `
        <center><h1 class ="quiz-name">Survival Fire Skill Quiz</h1></center>
        <div class ="fire-quiz">

        

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
    <h3 class="question">Question 4: How deep does your trench need to be for a fire pit?</h3>
    <input type="radio" name="question4" >6 feet<br>
    <input type="radio" name="question4" id="correct4">A couple of inches deep<br>
    <input type="radio" name="question4" >12 inches<br>
    <input type="radio" name="question4" >6 1/2 inches<br>
    </div>

    <div class="question-container-two">
    <h3 class="question">Question 5: What is a tinder nest?</h3>
    <input type="radio" name="question5" id="correct5">A bundle of things that burst into flames effectively<br>
    <input type="radio" name="question5" >A bird nest you can burn<br>
    <input type="radio" name="question5" >A dating app for birds<br>
    <input type="radio" name="question5" >A collection of wet branches<br>
    </div>

    </div>
    <br>
    <div class="submit_quiz">
    <input class="submit_Btn" type="submit" name="submit" value="Submit Quiz" id="result">
    <h1 class="number_right" id="number_correct"></h1>
    </div>
    
    
        
        
        
    `;
    }