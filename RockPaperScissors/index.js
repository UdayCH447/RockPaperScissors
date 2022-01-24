let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-s");
const computerScore_span = document.getElementById("computer-s");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function compChoice(){
    const choices=["r","p","s"];
    let computerChoices=Math.floor(Math.random() * 3);
    return choices[computerChoices];
}

function convert(char){
    if( char === "r"){return "Rock";}
    if( char === "s"){return "scissors";}
    else{
        return "paper";
    }
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `As Comp used ${convert(computerChoice)}. ${convert(userChoice)} beats ${convert(computerChoice)}.You Win 🔥🔥!`
    document.getElementById(userChoice).classList.add("green");
    setTimeout( () => { document.getElementById(userChoice).classList.remove("green") }, 500)

}

function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `As Comp used ${convert(computerChoice)}. ${convert(userChoice)} loses to ${convert(computerChoice)}.You lose 😂😂!`
    document.getElementById(userChoice).classList.add("red");
    setTimeout( () => { document.getElementById(userChoice).classList.remove("red") }, 500)
}
function draw(userChoice,computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `As Comp used ${convert(computerChoice)}. ${convert(userChoice)} and ${convert(computerChoice)} are Same.Its draw Buddy😒😒!`
    document.getElementById(userChoice).classList.add("grey");
    setTimeout( () => { document.getElementById(userChoice).classList.remove("grey") }, 500)
}

function game(usChoice){
    const userChoice = usChoice;
    const computerChoice = compChoice();
    let res = userChoice + computerChoice;
    switch (res){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice,computerChoice);
        break;
        case "rp":
        case "sr":
        case "ps":lose(userChoice,computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":draw(userChoice,computerChoice);
        break;
    }

}


function main(){
    rock_div.addEventListener('click',function() {
        game("r");    
    })

    paper_div.addEventListener('click',() => {
        game("p");
    })

    scissors_div.addEventListener('click',() => {
        game("s");
    })
}
 main();

 