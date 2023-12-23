let kumaCount = 0;
let sanCount = 0;
let numWon = 0;
let numLost = 0;
let guess = null;
let result = null;

let coin = document.querySelector(".coin")
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let kumaBtn = document.querySelector("#kuma-guess");
let sanBtn = document.querySelector("#sansan-guess");
let replayBtn = document.querySelector("#replay-button");

flipBtn.disabled = true;
replayBtn.disabled = true;


kumaBtn.addEventListener("click", () => {
    enableFlip();
    sanBtn.disabled = true;
    guess = 1;
});

sanBtn.addEventListener("click", () => {
    enableFlip();
    kumaBtn.disabled = true;
    guess = 0;
});


/* for when we click to flip coin */
flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2)
    coin.style.animation="none";
    result = i;
    // display result
    if(i){
        setTimeout(function(){
            coin.style.animation="spin-kuma 3s forwards";
        },100);
        kumaCount++
    } 
    else{
        setTimeout(function(){
            coin.style.animation = "spin-sansan 3s forwards"
        }, 100);
        sanCount++;
    }
    setTimeout(updateStats, 3000); // delay stats being updated until coin stops spinning

    // disable flip coin and ask if they want to play again
    flipBtn.disabled = true;
    replayBtn.disabled = false;
});

// if player wants to play again
replayBtn.addEventListener("click", () => {
    kumaBtn.disabled = false;
    sanBtn.disabled = false;
    guess = null;
    result = null;
    replayBtn.disabled = true;
})

function updateStats(){
    document.querySelector("#heads-count").
    textContent = `Kuma: ${kumaCount}`;
    document.querySelector("#tails-count").
    textContent = `SanSan: ${sanCount}`;

    // if right
    if (result == guess){
        numWon++;
        document.querySelector("#num-won").
        textContent = `Won: ${numWon}`
    } else{
        numLost++;
        document.querySelector("#num-lost").
        textContent = `Lost: ${numLost}`

    }
}

function disableFlip(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    }, 3000);
}

function enableFlip(){
    flipBtn.disabled = false;
}