// Togloomiin buh gazart ashiglagdah global huwisagchdiig end zarlay

// Togloom duussan esehiig hadgalah tolowiin huwisagch
var isNewGame;

// Ali toglogch shoo shideh we gedgiig end hadgalna
var activePlayer;

// Hoer toglogchiin tsugluulsan onoo
var scores;

// Idehtei toglogchiin tsugluul baigaa eeljiin onoo
var roundScore;

// Shoonii zurgiig uzuuleh elementiig DOM-s haij olood end hadgalya.
var diceDom = document.querySelector(".dice");

// Togloomiig ehluulne.
initGame();

// Togloogmiig shineer ehlehed beltgene.
function initGame(){
// Togloom ehellee gedeg tolowt oruulna.
isNewGame = true;

// Toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogchiig 0, hoerdugaar toglogchiig 1 gej temdegley.
activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah huwisagch
scores = [0, 0];

 // Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
roundScore = 0;

//Program ehlehed beltgey
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

// Toglogchdiin neriig butsaaj gargah
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

diceDom.style.display = "none";
}

// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function(){
   if(isNewGame){      // isNewGame === true
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
   }else{
    alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү!");
   }
});
// Hold towchnii event listener
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(isNewGame){
        // Ug toglogchiin tsugluulsan eeljnii onoog global onoon deer n nemj ogno
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Delgets deer onoog ni uurchlunu.
document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Ug toglogch hojson esehiig shalgah
    if(scores[activePlayer] >= 100){
        // Togloomiig duussan tolowt oruulna.
        isNewGame = false;

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
    }else{
        alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү!");
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
// Shoog tur alga bolgono.
diceDom.style.display = "none";
}
// New game buyu Shine togloom ehluuleh towchnii event listener
document.querySelector('.btn-new').addEventListener('click', initGame);
