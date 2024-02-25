import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Banner({ answer, hasWonGame, numOfGuesses }) {
	// console.log("Desde Banner: ", answer, hasWonGame, numOfGuesses);

	if (hasWonGame) {
		return (
			<div className="happy banner">
				<p>
					<strong>Congratulations!</strong> Got it in
					<strong> {numOfGuesses} guesses</strong>.
				</p>
			</div>
		);
	} else if (numOfGuesses === NUM_OF_GUESSES_ALLOWED) {
		// console.log("Perdiste");
		return (
			<div className="sad banner">
				<p>
					Sorry, the correct answer is <strong>{answer}</strong>.
				</p>
			</div>
		);
	}
}

export default Banner;
