import React from "react";

import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import Keyboard from "../Keyboard";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Game({ answer, resetSignal }) {
	const [guesses, setGuesses] = React.useState([]);
	const [hasWonGame, setHasWonGame] = React.useState(false);
	const [numOfGuesses, setNumOfGuesses] = React.useState(0);

	// Hago un poco de trampa usando useEffect pero necesito saber cuando ha cambiado el answer
	// Si cambia el answer eso significa que juego nuevo asi que reinicio todo
	// Otra opcion seria pasar una variable que indicase el nuevo juego newGame
	React.useEffect(() => {
		console.log("Juego nuevo. Reiniciando todo.");
		setGuesses([]);
		setHasWonGame(false);
		setNumOfGuesses(0);
	}, [resetSignal]);

	// console.log(guesses);

	function handleSubmit(nextGuess) {
		// console.log(numOfGuesses);
		// Creo que ni siquiera necesitamos esta linea ya (text input desactivado)
		if (numOfGuesses >= NUM_OF_GUESSES_ALLOWED) return;
		const newGuess = [...checkGuess(nextGuess, answer)];
		console.log(newGuess);
		setGuesses([...guesses, newGuess]);

		// OJO: las actualizaciones de estado de React son asincronas
		setNumOfGuesses(numOfGuesses + 1);
		// console.log(guesses);

		// Necesitamos comprobar si ha ganado o si ya ha terminado la partida (maximo numero de intentos)
		if (nextGuess === answer) {
			// Ha ganado
			console.log("Ganador");
			setHasWonGame(true);
			return;
		}

		// console.log(numOfGuesses);

		// Solución cutre para no usar useEffect (todavia no dado)
		if (numOfGuesses + 1 === NUM_OF_GUESSES_ALLOWED) {
			// Ha terminado el juego sin victoria (habria saltado el caso anterior)
			console.log("Has perdido.");
			setHasWonGame(false);
			return;
		}
	}

	return (
		<>
			<GuessResults guesses={guesses} />
			<GuessForm handleSubmit={handleSubmit} hasWonGame={hasWonGame} numOfGuesses={numOfGuesses} />
			<Banner answer={answer} hasWonGame={hasWonGame} numOfGuesses={numOfGuesses} />
			<Keyboard guesses={guesses} />
		</>
	);
}

export default Game;
