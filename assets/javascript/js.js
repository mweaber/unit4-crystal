var comNumber;
var button1Num = [];
var button2Num = [];
var button3Num = [];
var button4Num = [];
var counter = 0;
var numberOptions = [];
var wins = 0;
var losses = 0;

function gameLost() {
    $("#lossMade").text(losses);
    $("#playerScore").text("");
    counter = 0;
}

function gameWon() {
    $("#winsMade").text(wins);
    $("#playerScore").text("");
    counter = 0;
}

function crystalNumbers() {

    // function crystal1() {
    button1Num = Math.round(Math.random() * (12 - 1) + 1);

    // }

    // function crystal2() {
    button2Num = Math.round(Math.random() * (12 - 1) + 1);

    // }

    // function crystal3() {
    button3Num = Math.round(Math.random() * (12 - 1) + 1);

    // }

    // function crystal4() {
    button4Num = Math.round(Math.random() * (12 - 1) + 1);

    // }
}


$(document).ready(function () {
    crystalNumbers();
    comNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#scoreToMatch").text(comNumber);


    $(".button1").on("click", function () {

        counter += button1Num;
        $("#playerScore").text(counter);
        scoreChecker();

    });

    $(".button2").on("click", function () {

        counter += button2Num;
        $("#playerScore").text(counter);
        scoreChecker();

    });

    $(".button3").on("click", function () {

        counter += button3Num;
        $("#playerScore").text(counter);
        scoreChecker();

    });

    $(".button4").on("click", function () {

        counter += button4Num;
        $("#playerScore").text(counter);
        scoreChecker();

    });
})

function scoreChecker() {
    if (counter == comNumber) {
        wins++;
        gameWon();
        crystalNumbers();
        comNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#scoreToMatch").text(comNumber);

    } else if (counter >= comNumber) {
        losses++;
        gameLost();
        crystalNumbers();
        comNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#scoreToMatch").text(comNumber);

    }
}





