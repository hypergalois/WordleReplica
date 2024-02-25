import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessForm({ handleSubmit, hasWonGame, numOfGuesses }) {
	const [currentGuess, setcurrentGuess] = React.useState("");

	return (
		<div>
			<form
				className="guess-input-wrapper"
				onSubmit={(event) => {
					event.preventDefault();
					// console.log({ currentGuess });
					// setGuesses([...guesses, currentGuess]);
					handleSubmit(currentGuess);

					setcurrentGuess("");
				}}
			>
				<label htmlFor="guess-input">Enter guess:</label>
				<input
					disabled={hasWonGame || numOfGuesses === NUM_OF_GUESSES_ALLOWED}
					id="guess-input"
					type="text"
					required
					pattern="[a-zA-Z]{5}"
					title="5 letter word"
					maxLength={5}
					value={currentGuess}
					onChange={(event) => {
						setcurrentGuess(event.target.value.toUpperCase());
					}}
				></input>
			</form>
		</div>
	);
}

export default GuessForm;
