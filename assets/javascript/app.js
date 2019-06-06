//q and a
$(document).ready(function () {
    var questions = [ {
        question: "What was Medusa's hair made of?",
        choices: ["Ropes", "Snakes", "Strips of tape", "Wires"],
        answer: 1,
        photo: "assets/images/Medusa.jpg"
    }, {
        question: "What famed item belonged to Pandora",
        choices: ["Car", "Candy Cane", "Box", "Lamp"],
        answer: 2,
        photo:"assets/images/pandora.jpg"
    }, {
        question: "What was Achilles Weakness and Downfall?",
        choices: ["Pride", "Anger", "His Heel", "His Elbow"],
        answer: 2,
        photo: "assets/images/Achilles.jpg"
    }, {
        question: "Who was the god of the sea?",
        choices: ["Hades", "Poseidon", "Zues", "Apollo"],
        answer: 1,
        photo: "assets/images/Poseidon.jpg"
    }, {
        question: "What was the name of Apollo's twin sister?",
        choices: ["Amy", "Athena", "Iris", "Artemis"],
        answer: 3,
        photo: "assets/images/AthenaRight.jpg"
    }, {
        question: "Who was the beautiful person loved by the goddess Aphrodite?",
        choices: ["Artemis", "Zues", "Adonis", "Eros"],
        answer: 2,
        photo: "assets/images/answer.jpg"
    }, {
        question: "Who was the god of the Underworld?",
        choices: ["Hades", "Adonis", "Athena", "Promethius"],
        answer: 0,
        photo: "assets/images/Hades.jpg"
    }, {
        question: "Who was the first woman according to Greek mythology?",
        choices: ["Eve", "Pandora", "Athena", "Persephone"],
        answer: 1,
        photo: "assets/images/pandora.jpg"
    }, {
        question: "Which Demi-God defeated Medusa?",
        choices: ["Poseidon", "Promethius", "Pontus", "Perseus"],
        answer: 3,
        photo: "assets/images/answer.jpg"
    }, {
        question: "What was the name of Hade's wife?",
        choices: ["Persephone", "Gaia", "Theia", "Aphrodite"],
        answer: 0,
        photo: "assets/images/persephone.jpg"
     }];

//Game Operation/functions
var correctCount = 0;
var wrongCount = 0;
var unanswerCount = 0;
var timer = 20;
var intervalId;
var userGuess ="";
var running = false;
var qCount = questions.length;
var pick;
var index;
var newArray = [];
var holder = [];

//start button will vanish once clicked by the user//hide reset button
$("#reset").hide();
//click start button to start game
$("#start").on("click", function () {
    $("#start").hide();
    displayQuestion();
    runTimer();
    for (var i = 0; i < questions.length; i++) {
        holder.push(questions[i]);
    }
})


//timer start
function runTimer() {
    if (!running) {
        intervalId = setInterval(decrement, 1000);
        running = true;
    }
}
//timer countdown
function decrement() {
    $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
    timer--;

    //stop timer if reach 0
    if (timer === 0) {
        unanswerCount++;
        stop();
        $("#answerblock").html("<p>Time is up! The correct answer is: " + pick.choices[pick.answer] + "</p>");
        hidepicture();
    }
}

//timer stop
function stop() {
    running = false;
    clearInterval(intervalId);
}
//randomly pick question in array if not already shown
//display question and loop though and display possible choices

function displayQuestion() {
    //generate random index in array
    index = Math.floor(Math.random() * questions.length);
    pick = questions[index];
    //iterate through answer array and display
    $("#questionblock").html("<h2>" + pick.question + "</h2>");
    for (var i = 0; i < pick.choices.length; i++) {
        var userChoice = $("<div>");
        userChoice.addClass("answerchoice");
        userChoice.html(pick.choices[i]);
        //assign array position to it so can check answer
        userChoice.attr("data-guessvalue", i);
        $("#answerblock").append(userChoice);
        
    }



    //click function to select answer and outcomes
    $(".answerchoice").on("click", function () {
        //grab array position from userGuess
        userGuess = parseInt($(this).attr("data-guessvalue"));

        //correct guess or wrong guess outcomes
        if (userGuess === pick.answer) {
            stop();
            correctCount++;
            userGuess = "";
            $("#answerblock").html("<p>Correct!</p>");
            hidepicture();

        } else {
            stop();
            wrongCount++;
            userGuess = "";
            $("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choices[pick.answer] + "</p>");
            hidepicture();
        }
    })
}


function hidepicture() {
    $("#answerblock").append("<img src=" + pick.photo + ">");
    newArray.push(pick);
    questions.splice(index, 1);

    var hidpic = setTimeout(function () {
        $("#answerblock").empty();
        timer = 20;

        //run the score screen if all questions answered
        if ((wrongCount + correctCount + unanswerCount) === qCount) {
            $("#questionblock").empty();
            $("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
            $("#answerblock").append("<h4> Correct: " + correctCount + "</h4>");
            $("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>");
            $("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>");
            $("#reset").show();
            correctCount = 0;
            wrongCount = 0;
            unanswerCount = 0;

        } else {
            runTimer();
            displayQuestion();

        }
    }, 3000);


}

$("#reset").on("click", function () {
    $("#reset").hide();
    $("#answerblock").empty();
    $("#questionblock").empty();
    for (var i = 0; i < holder.length; i++) {
        questions.push(holder[i]);
    }
    runTimer();
    displayQuestion();

})
})




