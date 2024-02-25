import React from "react";

import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses }) {
	// guesses.map((guess) => {
	// 	// console.log(guess);
	// 	console.log(checkGuess(guess).toString());
	// });
	// console.log(range(0, NUM_OF_GUESSES_ALLOWED));

	return (
		<div className="guess-results">
			{range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
				if (guesses[index]) return <Guess key={index} guess={guesses[index]} />;
				else return <Guess key={index} guess={""} />;
			})}
		</div>
	);
}

export default GuessResults;
