// Toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogchiig 0, hoerdugaar toglogchiig 1 gej temdegley.
var activePlayer = 0;


// Toglogchdiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];

 // Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
var roundScore = 0;

 // Shoonii ali talaaraa buusniig hadgalah huwisagch heregtei, 1-6 gesen utgiig ene huwisagchid sanamsarguigeer uusgej ogno

//Program ehlehed beltgey
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";


// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function(){

 // 1-6 dotor sanamsargui toog gargaj awna
    var diceNumber= Math.floor(Math.random() * 6) + 1;

 // Shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";

 // Buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne.
    diceDom.src = "dice-" + diceNumber + ".png";

 // Buusan too ni 1-s ylgaatai bol idewhtei Toglogchiin eeljiin onoog nemegduulne.
    if(diceNumber !== 1){
        // 1-s ylgaatai too buulaa. Buusan toog toglogchid nemj ugnu.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else {
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.
        switchToNextPlayer();
 }
});
// Hold towchnii event listener
document.querySelector('.btn-hold').addEventListener('click', function(){
    // Ug toglogchiin tsugluulsan eeljnii onoog global onoon deer n nemj ogno
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Delgets deer onoog ni uurchlunu.
document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];


    // Ug toglogch hojson esehiig shalgah
    if(scores[activePlayer] >= 10){
        // Winner gesen textiig nerniih ni orond gargana.
        document.getElementById('name-' + activePlayer).textContent = "Winner!";
        
        document.querySelector('.player-' + activePlayer + '-panel')
        .classList.add('winner');

        document.querySelector('.player-' + activePlayer + '-panel')
        .classList.remove('active');
    }else{
        // Toglogchiin eeljiig solino.
        switchToNextPlayer()
    }

});

// Ene function ni togloh eeljiig daraachiin toglogchruu shiljuuldeg.
function switchToNextPlayer(){
    // Ene toglogchiin eeljildee tsugluulsan onoog 0 bolgono.
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;

    // Toglogchiin eeljiig nuguu toglogchruu shiljuulne.

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Ulaan tsegiig shiljuuleh
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // if(activePlayer === 0){
    //     activePlayer = 1;
    // }else{
    //     activePlayer = 0;
    // }
// Shoog tur alga bolgon.
diceDom.style.display = "none";
}