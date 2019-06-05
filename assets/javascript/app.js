//start button will vanish once clicked by the user
$('#start').on('click',function(){
    ('#start').remove();
})

//q and a variables

var questions = [{
questions: "What was Medusa's hair made of?" ,
answers: ["Ropes", "Snakes", "Strips of tape", "Wires"] ,
correctAnswer: "Snakes",
}, {
    questions: "What famed item belonged to Pandora" ,
    answers: ["Car", "Candy Cane", "Box", "Lamp"] ,
    correctAnswer: "Box",
},{
    questions: "What was Achilles Weakness and Downfall?" ,
    answers: ["Pride", "Anger", "His Heel", "His Elbow"] ,
    correctAnswer: "His Heel",
}, {
    questions: "Who was the god of the sea?" ,
    answers: ["Hades", "Poseidon", "Zues", "Apollo"] ,
    correctAnswer: "Poseidon",
}, {
    questions: "What was the name of Apollo's twin sister?" ,
    answers: ["Amy", "Athena", "Iris", "Artemis"] ,
    correctAnswer: "Artemis",
}, {
    questions: "Who was the beautiful person loved by the goddess Aphrodite?" ,
    answers: ["Artemis", "Zues", "Adonis", "Eros"] ,
    correctAnswer: "Adonis",
}, {
    questions: "Who was the god of the Underworld?" ,
    answers: ["Hades", "Adonis", "Athena", "Promethius"] ,
    correctAnswer: "Hades",
}, {
    questions: "Who was the first woman according to Greek mythology?" ,
    answers: ["Eve", "Pandora", "Athena", "Persephone"] ,
    correctAnswer: "Pandora",
}, {
    questions: "Which Demi-God defeated Medusa?" ,
    answers: ["Poseidon", "Promethius", "Pontus", "Perseus"] ,
    correctAnswer: "Perseus",
}, {
    questions: "What was the name of Hade's wife?" ,
    answers: ["Persephone", "Gaia", "Theia", "Aphrodite"] ,
    correctAnswer: "Persephone",
}];

//Game Operation/functions
const game = {
    questions:questions,
    //keep track of which question we are on
    currentQuestions:0,
    counter:30,
    //keeps track of the # of correct/incorrect answers
    correct:0,
    incorrect:0,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            alert.log("TIME UP!");
            game.timeUp();
        }
    },
    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000);
        $('#qabox').html('<h2>' +question[game.currentQuestion].question+'</h2>');
        for(vari=0;i<questions[game.currentQuestions].answers.length; i++){
            $('#qabox').append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestions].answers[i]+'</button>');
        }
    },
    nextQuestion: function(){
    },
    timeUp: function(){
    },
    results: function(){
    },
    clicked: function(){
    },
    rightAnswer: function(){
    },
    wrongAnswer: function(){
    },
    reset: function(){
    }      

}