console.log("Rock Paper Scissors")

/* 
function @getComputerChoice generates a response using Math.Random
Use if else statement to get the choice of Computer response
*/
var computerChoice = ""
var userChoice = ""
var userIntChoice = 0
var userScore = 0
var computerScore = 0
var tie = 0
function getComputerChoice() {
    randomInt = Math.floor(Math.random() * 3)

    if(randomInt == 0) {
        computerChoice = "Paper"
    } 
    if(randomInt == 1) {
        computerChoice = "Rock"
    }
    if(randomInt == 2) {
        computerChoice = "Scissors"
    }
}
/* 
function @getUserChoice allows user to pick a predetermine answer 
Rock Paper Scissors
*/
function getUserChoice(number) {
    userIntChoice = number
    if(userIntChoice == 0) {
        userChoice = "Paper"
    } 
    if(userIntChoice == 1) {
        userChoice = "Rock"
    }
    if(userIntChoice == 2) {
        userChoice = "Scissors"
    }
    
}

/* 
function @results check whether the user or the computer wins
*/
function results() {
    console.log(computerChoice + " Computer")
    console.log(userChoice + " User")

    if(computerChoice == userChoice) {
        tie = tie + 1
    }
    if(computerChoice == "Rock" && userChoice == "Scissors") {
        computerScore = computerScore + 1
    }
    if(computerChoice == "Scissors" && userChoice == "Paper") {
        computerScore = computerScore + 1
    }
    if(computerChoice == "Paper" && userChoice == "Rock") {
        computerScore = computerScore + 1
    }
    if(userChoice == "Rock" && computerChoice == "Scissors") {
        userScore = userScore + 1
    }
    if(userChoice == "Scissors" && computerChoice == "Paper") {
        userScore = userScore + 1
    }
    if(userChoice == "Paper" && computerChoice == "Rock") {
        userScore = userScore + 1
    }
    
}
/* 
function scoreboard
a while statement up to 5 rounds
after that it will return a winner
*/
function scoreboard() {
    console.log("Score: Tie: " + tie + " User: " + userScore + " Computer: "+ computerScore)

    if((tie + userScore + computerScore) == 5) {
        winnerMessage()
    }
}
/* 
function winnerMessage
*/
function winnerMessage() {
    console.log("Winner")
    if(computerScore > userScore) {
        console.log("Computer Won")
    }
    if(userScore > computerScore) {
        console.log("user won")
    }
    if(userScore == computerScore) {
        console.log("tie")
    }
}
/* 
connect the whole game
*/ 
function start(number) {
    getComputerChoice()
    getUserChoice(number)
    results()
    scoreboard()
}
start(0)
start(1)
start(2)
start(1)
start(2)
