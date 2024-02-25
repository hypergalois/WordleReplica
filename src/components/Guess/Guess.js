import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
	// console.log(guess);
	// console.log(guess.slice(0, 1));
	return (
		<p key="index" className="guess">
			{range(0, 5).map((index) => {
				// console.log("Dentro de Guess");
				// console.log(guess[0].status);
				if (guess[index]) {
					return (
						<span key={index} className={`cell ${guess[index].status}`}>
							{guess[index].letter}
						</span>
					);
				} else {
					return (
						<span key={index} className="cell">
							{""}
						</span>
					);
				}
			})}
		</p>
	);
}

export default Guess;
