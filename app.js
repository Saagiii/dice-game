// Toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogchiig 0, hoerdugaar toglogchiig 1 gej temdegley.
var activePlayer = 1;


// Toglogchdiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];

 // Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
var roundScore = 0;

 // Shoonii ali talaaraa buusniig hadgalah huwisagch heregtei, 1-6 gesen utgiig ene huwisagchid sanamsarguigeer uusgej ogno
 var dice = Math.floor(Math.random() * 6) + 1;
//  var dice1 = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>

// window.document.querySelector('#score-0').textContent = dice;
// document.querySelector('#score-1').textContent = dice1;
// document.querySelector('#score-1').innerHTML = "<em>Yes!<em>";

//Program ehlehed beltgey

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector(".dice").style.display = 'none';

console.log('Shoo: ' + dice);