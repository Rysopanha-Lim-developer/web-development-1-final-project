//list toggle
const toggler = document.getElementById("toggler");
const miniList = [...document.querySelectorAll("#mini-list")]

toggler.addEventListener("click", ()=>{
    toggler.classList.toggle("spin")
    miniList.forEach(element => {
        element.classList.toggle("shown")
    });
})

//guessing game
const userInputNums = document.getElementById("nums-input");
const userSubmit = document.getElementById("nums-input-submit");
const userReset = document.getElementById("nums-reset-submit");
const guessingResult = document.getElementById("guessing-result");
const allowedAttemp = document.getElementById("allowed-attempt")
let randomNums =  Math.floor((Math.random()*10)+1);
let maxattempts = 3;
let usedattempts= 1;

userSubmit.addEventListener("click", ()=>{
    RandomNums(userInputNums.value)
})
userReset.addEventListener("click", ()=>{
    maxattempts = 3;
    randomNums =  Math.floor((Math.random()*10)+1);
    allowedAttemp.textContent = `You have 3 chances`
    userInputNums.value = ''
    userSubmit.style.cursor = "pointer"
    guessingResult.textContent = `Result`
})

function RandomNums(userInput){

    if(maxattempts >= 1){
        if(Number(userInput) === randomNums){
            guessingResult.textContent = `You win check your reward on the list`
            console.log("win")
        }
        else{
            maxattempts -= usedattempts
            allowedAttemp.textContent = `You have ${maxattempts} chances left`
            console.log("lose")
            if(maxattempts === 0){
                guessingResult.textContent = `You Lost`
                allowedAttemp.textContent = `You have ${maxattempts} chances left`
                userSubmit.style.cursor = "not-allowed"
            }
        }
    }

}


//dice game
const startRollingBtn = document.getElementById("start-rolling")
const diceContainer = document.getElementById("dice-container")
const diceResult = document.getElementById("dice-result")

startRollingBtn.addEventListener("click", DiceRoller) 

function DiceRoller(){
    let resultGen = Math.floor(Math.random() * 6) + 1;

    switch(resultGen){
        case 1:
            diceContainer.style.backgroundImage = "url('/web-image/dice-six-faces-one.png')"
            diceResult.textContent = `you dice landed on ${resultGen}`
            break;
        case 2:
            diceContainer.style.backgroundImage = "url('/web-image/dice-six-faces-two.png')"
            diceResult.textContent = `you dice landed on ${resultGen}`
            break;
        case 3:
            diceContainer.style.backgroundImage = "url('/web-image/dice-six-faces-three.png')"
            diceResult.textContent = `you dice landed on ${resultGen}`
            break;
        case 4:
            diceContainer.style.backgroundImage = "url('/web-image/dice-six-faces-four.png')"
            diceResult.textContent = `you dice landed on ${resultGen}`
            break;
        case 5:
            diceContainer.style.backgroundImage = "url('/web-image/dice-six-faces-five.png')"
            diceResult.textContent = `you dice landed on ${resultGen}`
            break;
        case 6:
            diceContainer.style.backgroundImage = "url('/web-image/dice-six-faces-six.png')"
            diceResult.textContent = `you dice landed on ${resultGen}`
            break;
    }
}

