import React from "react";

import Game from "../Game";
import Header from "../Header";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function App() {
	const [answer, setAnswer] = React.useState(sample(WORDS).toUpperCase());
	// Creo este indicador en el caso de que sample devuelva la misma palabra que antes, entonces el useEffect no se activaria
	const [resetSignal, setResetSignal] = React.useState(false);
	console.log(answer);

	function handleNewGame() {
		console.log("New Game");
		setAnswer(sample(WORDS).toUpperCase());
		setResetSignal((prev) => !prev);
	}

	return (
		<div className="wrapper">
			<Header handleNewGame={handleNewGame} />

			<div className="game-wrapper">
				{/* Otra forma de forzar un nuevo juego seria cambiando el prop key, obligando a react a re-renderizar */}
				<Game answer={answer} resetSignal={resetSignal} />
			</div>
		</div>
	);
}

export default App;
