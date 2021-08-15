export default function ShelterQuiz() {
    return `
    <center><h1 class ="quiz-name">Shelter Building Quiz</h1></center>
    <div class ="food-survival-quiz">

    <div class="question-container-one">
    <h3 class="question">Question 1: Can you use a cave as a shelter ?</h3>
    <input type="radio" name="question1" id="correct1">Yes<br>
    <input type="radio" name="question1">No<br>
    </div>

    <div class="question-container-two">
    <h3 class="question">Question 2: Which is NOT an ideal location to build shelter</h3>
    <input type="radio" name="question2" >Dry Land<br>
    <input type="radio" name="question2" id="correct2">On Wet Land<br>
    <input type="radio" name="question2" >A Flat Surface<br>
    <input type="radio" name="question2">Near water, not next to it<br>
    </div>

    <div class="question-container-three">
    <h3 class="question">Question 3: Can you use a tarp as a shelter?</h3>
    <input type="radio" name="question3" id="correct3" >Yep!<br>
    <input type="radio" name="question3">Nope!<br>
    <input type="radio" name="question3" >I didn't read the article...<br>
    </div>

    <div class="question-container-one">
    <h3 class="question">Question 4: Can you use SNOW to build a shelter ?</h3>
    <input type="radio" name="question4" >No<br>
    <input type="radio" name="question4" id="correct4">Yes<br>
    <input type="radio" name="question4" >Maybe<br>
    </div>

    <div class="question-container-two">
    <h3 class="question">Question 5: When using a cave as a shelter, what are some things to be aware of?</h3>
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
    <div class ="shelter-quiz">
    </div>
    `
}