let comp_score = 0;
let user_score = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");


const generate_compchoice = () => {
    const Options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return Options[randomIdx];
};

const Gamewinner = (userwin, user_choice, comp_choice) => {
    if (userwin) {
        user_score++;
        userscorePara.innerText = user_score;
        console.log("hurray! U WIN")
        msg.innerText = `hurray! U WIN ,your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor = "green"
    } else {
        comp_score++;
        compscorePara.innerText = comp_score;
        console.log("Ahh! U LOSE")
        msg.innerText = `Ahh! U LOSE, computer's ${comp_choice} beats ${user_choice}`;
        msg.style.backgroundColor = "red"
    }

};

const DrawGame = (user_choice , comp_choice) => {
    console.log(" oops! its DRAW ,play again");
    msg.innerText = `oops! its DRAW ,play again , ${comp_choice} is same as ${user_choice} `;
    msg.style.backgroundColor = " black"
}

const playgame = (user_choice) => {
    console.log("user choice is", user_choice);
    const comp_choice = generate_compchoice();
    console.log("computer choice is ", comp_choice);

    if (user_choice === comp_choice) {
        DrawGame(user_choice , comp_choice);

    } else {
        let userwin = "true";
        if (user_choice === "rock") {
            // paper scissor
            userwin = comp_choice === "paper" ? false : true;
        } else if (user_choice === "paper") {
            //rock scissor
            userwin = comp_choice === "scissor" ? true : false;
        } else {
            //rock paper
            userwin = comp_choice === "rock" ? false : true;
        }
        Gamewinner(userwin, user_choice, comp_choice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        playgame(user_choice);
    })
})

