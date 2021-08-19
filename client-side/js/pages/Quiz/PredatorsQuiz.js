export default function PredatorsQuiz() {

    return `
    <center><h1 class ="quiz-name-predators">Predator Quiz</h1></center>
    <div class ="predator-quiz">

    <div class="question-container-predators">
    <h3 class="question-predators">Question 1: Should try to aggravate a predatory animal?</h3>
    <input type="radio" name="question1">Yes<br>
    <input type="radio" name="question1"  id="correct1">No<br>
    </div>

    <div class="question-container-predators">
    <h3 class="question-predators">Question 2: Are insects dangerous?</h3>
    <input type="radio" name="question1">Yes<br>
    <input type="radio" name="question1"  id="correct2">No<br>
    </div>

    <div class="question-container-predators">
    <h3 class="question-predators">Question 3: Can you out run a Mountain Lion?</h3>
    <input type="radio" name="question3" >Yep!<br>
    <input type="radio" name="question3" id="correct3" >Nope!<br>
    <input type="radio" name="question3" >I didn't read the article...<br>
    </div>

    <div class="question-container-predators">
    <h3 class="question-predators">Question 4: Did you read the article?</h3>
    <input type="radio" name="question4" >No<br>
    <input type="radio" name="question4" id="correct4">Yes<br>
    <input type="radio" name="question4" >Maybe<br>
    </div>

    <div class="question-container-predators">
    <h3 class="question-predators">Question 5:Wwhat are some things to be aware of when watching for animals in the wild?</h3>
    <input type="radio" name="question5" >Animal Tracks<br>
    <input type="radio" name="question5" >Animal Droppings<br>
    <input type="radio" name="question5" >Unfamiliar Sounds <br>
    <input type="radio" name="question5" id="correct5">All the above<br>
    </div>

    </div>
    <br>
    <div class="submit_quiz">
    <input class="submit_Btn" type="submit" name="submit" value="Submit Quiz" id="result">
    <h1 class="number_right" id="number_correct"></h1>
    </div>
    <div class ="predator-quiz">
    </div>
    <br>
    <div class="skills-btn-links_Food"><< Food</div>
    <div class="skills-btn-links_Predators">Predators</div>
    <div class="skills-btn-links_Fire">Fire >></div>
    `;
}