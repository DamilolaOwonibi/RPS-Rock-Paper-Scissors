let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function converttoword(letter) {
	if (letter == "r") return "Rock";
	if (letter == "p") return "Paper";
	return "Scissors";
}

function win(userChoice, computerChoice) {
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);

	userScore ++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${converttoword(userChoice)}${smallUserWord}  beats  ${converttoword(computerChoice)}${smallCompWord} . You win🔥`;
	userChoice_div.classList.add('green_glow');
	setTimeout(() =>  userChoice_div.classList.remove('green_glow'), 300);
}

function lose(userChoice, computerChoice) {
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);

	computerScore ++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${converttoword(userChoice)}${smallUserWord}  has lost to  ${converttoword(computerChoice)}${smallCompWord} . You Lose💩💩💩`;
	userChoice_div.classList.add('red_glow');
	setTimeout(() => userChoice_div.classList.remove('red_glow'), 300);
}

function tie(userChoice, computerChoice) {
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);

	computerScore = computerScore;
	userScore = userScore;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${converttoword(userChoice)}${smallUserWord}  has tied to  ${converttoword(computerChoice)}${smallCompWord}🔥`;
	userChoice_div.classList.add('grey_glow');
	setTimeout(() => userChoice_div.classList.remove('grey_glow'), 300);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			tie(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', () => game("r"))

	paper_div.addEventListener('click', () => game("p"))

	scissors_div.addEventListener('click', () => game("s"))
}

main();