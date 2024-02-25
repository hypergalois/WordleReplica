import React from "react";

function Header({ handleNewGame }) {
	return (
		<header>
			<div className="title-container">
				<h1>Wordle Replica</h1>
			</div>
			<div className="button-container">
				<button onClick={handleNewGame}>New Game</button>
			</div>
		</header>
	);
}

export default Header;
