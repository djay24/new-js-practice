/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
    // writing function in event listener
    if(gamePlaying) {
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number is not a 1
    if (dice === 6 && lastDice === 6) {
        //player loses score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    } else if (dice != 1) {
        // Add score
        roundScore += dice;
        // roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next Player
        nextPlayer()
 }
    }
   
    lastDice = dice;

});

// adding hold button function

    document.querySelector('.btn-hold').addEventListener('click', function() {
        if (gamePlaying) {
             // add current score to players global score
        scores[activePlayer] += roundScore;


        // update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        // check if player won the game
            if(scores[activePlayer] >= 15 ) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner'
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
                gamePlaying = false;
            } else {
                 // next player 
                nextPlayer();
            }
        }
    });

    function nextPlayer() {
         // Next Player
         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
         roundScore = 0;
 
         document.getElementById('current-0').textContent = '0';
         document.getElementById('current-1').textContent = '0';
 
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');
 
         // document.querySelector('.player-0-panel').classList.remove('active');
         // document.querySelector('.player-1-panel').classList.add('active');
 
         document.querySelector('.dice').style.display = 'none'
    }

    document.querySelector('.btn-new').addEventListener('click', init);

    function init() {
        scores = [0,0];
        activePlayer = 0;
        roundScore = 0;
        gamePlaying = true;

        // remove the dice from the screen
        document.querySelector('.dice').style.display = 'none';

        // remove all scores 
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        // changing the winners name back to player one or two
        document.getElementById('name-0').textContent = 'Player 1'
        document.getElementById('name-1').textContent = 'Player 2'
        
        // remove the winner class from the winning player panel 
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');

        // remove the active class and put back on player one
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');

    };


    
// // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;
// console.log(x)