var inquirer = require('inquirer');
var colors = require('colors');

function game() {
	inquirer.prompt([
		{
			type: 'list',
			name: 'userChoice',
			message: 'What do you throw!?',
			choices: ['ROCK', 'PAPER', 'SCISSORS']
		}
	]).then(function (choice) {

		var compChoices = ['ROCK', 'PAPER', 'SCISSORS'];

		var compThrow = compChoices[Math.floor(Math.random() * compChoices.length)];
		var rps = choice.userChoice;

		//console.log(rps);

		if ((rps === 'ROCK') && (compThrow === 'PAPER')) {
			console.log('PAPER! \nYOU LOSE'.red);
		} else if ((rps === 'ROCK') && (compThrow === 'SCISSORS')) {
			console.log('SCISSORS...\n*YOU WIN!!*'.rainbow);
		} else if ((rps === 'PAPER') && (compThrow === 'ROCK')) {
			console.log('ROCK...\n*YOU WIN!!*'.rainbow);
		} else if ((rps === 'PAPER') && (compThrow === 'SCISSORS')) {
			console.log('SCISSORS...\nYOU LOSE'.red);
		} else if ((rps === 'SCISSORS') && (compThrow === 'ROCK')) {
			console.log('ROCK...\nYOU LOSE'.red);
		} else if ((rps === 'SCISSORS') && (compThrow === 'PAPER')) {
			console.log('PAPER...\n*YOU WIN!!*'.rainbow);
		} else if (rps === compThrow) {
			console.log("IT'S A TIE!".yellow);
		}
	});
}

game();