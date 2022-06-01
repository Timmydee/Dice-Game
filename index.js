let player1Score = 0
let player2Score = 0
let player1Turn = true

let roll = document.getElementById('rollbtn')
let reset = document.getElementById('resetbtn')

let player1ScoreBoard = document.getElementById('Player1scoreboard')
let player2ScoreBoard = document.getElementById('player2scoreboard')

let message = document.getElementById('player-turn')

let player1Dice = document.getElementById("player1dice")
let player2Dice = document.getElementById("player2dice")

//roll the dice
roll.addEventListener('click',function(){
    let randomNo = Math.floor(Math.random() * 8) + 1
    //To generate a null value of 0 
    if(randomNo === 7){
        randomNo = 0
    } else if(randomNo == 8){ //To reset the score to 8
        player1Score = 0
        player2Score = 0
    } 

// Playing pattern
    if(player1Turn){
        player1Dice.textContent = randomNo //Display the random generated no
        player1Score += randomNo //Add the sum of all random number for player 1
        player1ScoreBoard.textContent = player1Score //Display the sum of player1
        message.textContent = "Player 2 Turn" //display player1 turn
        player1Dice.classList.remove('active') //remove the box shadow
        player2Dice.classList.add('active') //add the box shadow
    } else {
        player2Dice.textContent = randomNo ////Display the random generated no
        player2Score += randomNo  //Add the sum of all random number for player 1
        player2ScoreBoard.textContent = player2Score //Display the sum of player1
        message.textContent = "Player 1 Turn" //display player2 turn
        player2Dice.classList.remove('active') //remove the box shadow
        player1Dice.classList.add('active') //add the box shadow
    }

    //Determine the winner
    if(player1Score >= 21){
        message.textContent = "Player 1 Won 🏆"
        reset.style.display = 'block'
        roll.style.display = 'none'
    } else if(player2Score >= 21){
        message.textContent = 'Player 2 Won 🏆'
        reset.style.display = 'block'
        roll.style.display = 'none'
    }
    player1Turn = !player1Turn
})


reset.addEventListener('click', function(){
    resets()
})

function resets(){
    player1Score = 0
    player2Score = 0
    player1Turn = true
    message.textContent = "Player 1 Turn"
    player1ScoreBoard.textContent = 0
    player2ScoreBoard.textContent = 0
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    reset.style.display = "none"
    roll.style.display = "block"
    player1Dice.classList.add('active')
    player2Dice.classList.remove('active')
}