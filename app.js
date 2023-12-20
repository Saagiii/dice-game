// Toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogchiig 0, hoerdugaar toglogchiig 1 gej temdegley.
var activePlayer = 1;


// Toglogchdiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];

 // Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
var roundScore = 0;

 // Shoonii ali talaaraa buusniig hadgalah huwisagch heregtei, 1-6 gesen utgiig ene huwisagchid sanamsarguigeer uusgej ogno

//Program ehlehed beltgey
document.getElementById('score-1').textContent = "0";
document.getElementById('score-0').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function(){
    var diceNumber= Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
});
