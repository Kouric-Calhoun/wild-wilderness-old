export default function FoodQuiz() {
    return `
    <center><h1 class ="quiz-name">Survival Snare-Setup Skill Quiz</h1></center>
    <div class ="food-survival-quiz">

    <div class="question-container-one">
    <h3 class="question">Question 1: How many components are there to making a Trigger Snare ?</h3>
    <input type="radio" name="question1">One<br>
    <input type="radio" name="question1">Two<br>
    <input type="radio" name="question1">Three<br>
    <input type="radio" name="question1"id="correct1">Four<br>
    </div>

    <div class="question-container-two">
    <h3 class="question">Question 2: What is the max weight that this snare can handle?</h3>
    <input type="radio" name="question2" >2lbs-4lbs<br>
    <input type="radio" name="question2" id="correct2">5lbs-8lbs<br>
    <input type="radio" name="question2" >9lbs-13lbs<br>
    <input type="radio" name="question2">14lbs-19lbs<br>
    </div>

    <div class="question-container-three">
    <h3 class="question">Question 3: What is the average length that your noose should be?</h3>
    <input type="radio" name="question3" >1 in -5 in<br>
    <input type="radio" name="question3">6 in - 9 in<br>
    <input type="radio" name="question3" >10 in - 15 in<br>
    <input type="radio" name="question3"id="correct3">18 in - 25 in<br>
    </div>

    <div class="question-container-one">
    <h3 class="question">Question 4: What is the last step in setting up your snare trap?</h3>
    <input type="radio" name="question4" >Trigger and Leader Line setup<br>
    <input type="radio" name="question4" id="correct4">Redirect Flow of Traffic<br>
    <input type="radio" name="question4" >Starting The Engine<br>
    <input type="radio" name="question4" >Read The Article<br>
    </div>

    <div class="question-container-two">
    <h3 class="question">Question 5: What can be used to make noose?</h3>
    <input type="radio" name="question5">Picture hanging wire<br>
    <input type="radio" name="question5" >Headphone wire<br>
    <input type="radio" name="question5" >Stripped wire from car or vehicle electrical systems<br>
    <input type="radio" name="question5" id="correct5">All Of The Above<br>
    </div>

    </div>
    <br>
    <div class="submit_quiz">
    <input class="submit_Btn" type="submit" name="submit" value="Submit Quiz" id="result">
    <h1 class="number_right" id="number_correct"></h1>
    </div>
    <div class ="food-quiz">
    </div>
    `;
}