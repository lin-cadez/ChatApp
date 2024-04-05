import React from "react";
import "./home.css";

function Home() {
	return (
		<div>
			<h1>ChatApp</h1>
			<section className="chat-window">
				<div className="messages">
					<div className="other-message">
						<div className="message">Hello!</div>
					</div>
					<div className="self-message">
						<div className="message">Hi!</div>
					</div>
				</div>
				<div className="input-field">
					<input type="text" placeholder="Start typing..." />
					<button>Send</button>
				</div>
			</section>
		</div>
	);
}

export default Home;
