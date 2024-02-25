import React from "react";

const ROWS = [
	["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["A", "S", "D", "F", "G", "H", "J", "K", "L"],
	["Z", "X", "C", "V", "B", "N", "M"],
];

// Objeto usado para comparar prioridades de statuses
const STATUS_RANK = {
	correct: 1,
	misplaced: 2,
	incorrect: 3,
};

function getStatusByLetter(guesses) {
	const alphabetStatus = {};
	const allLetters = guesses.flat();

	allLetters.forEach(({ letter, status }) => {
		const currentStatus = alphabetStatus[letter];

		if (currentStatus === undefined) {
			alphabetStatus[letter] = status;
			return;
		}

		// Ahora tenemos que comprobar si la letra tiene mas statuses que hacemos
		// Nuestra prioridad será acertado, misplaced e incorrecto en ese orden
		const currentStatusRank = STATUS_RANK[currentStatus];
		const newStatusRank = STATUS_RANK[status];

		// Si el nuevo status es MAS PRIORITARIO (MENOS VALOR) se cambia
		if (newStatusRank < currentStatusRank) {
			alphabetStatus[letter] = status;
		}
	});

	return alphabetStatus;
}

function Keyboard({ guesses }) {
	const statusByLetter = getStatusByLetter(guesses);
	console.log(statusByLetter);

	return (
		<div className="keyboard">
			{ROWS.map((row, index) => {
				return (
					<div className="keyboard-row" key={index}>
						{row.map((letter, index) => {
							return (
								<div className={`letter ${statusByLetter[letter] || ""}`} key={index}>
									{letter}
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default Keyboard;
