import { useState } from "react";

import "./App.css";

function App() {
	return (
		<>
			<div className="main-window">
				<label htmlFor="username">Username</label>
				<input type="text" id="username" />

				<label htmlFor="age">Age (Years)</label>
				<input type="number" id="age" />

				<button className="addUserBtn">Add user</button>
			</div>
			<div className="userList">
				<div className="userListItem">Max (31 years old)</div>
			</div>
		</>
	);
}

export default App;
