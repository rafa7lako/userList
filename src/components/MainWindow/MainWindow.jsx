import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./MainWindow.module.css";

const MainWindow = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	// const [usernameData, setUsernameData] = useState("");
	// const [ageData, setAgeData] = useState("");

	// const usernameDataHandler = (event) => {
	// 	setUsernameData(event.target.value);
	// };

	// const ageDataHandler = (event) => {
	// 	setAgeData(event.target.value);
	// };

	const onSubmitHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;

		const userData = {
			username: enteredName,
			age: enteredAge,
			key: uuidv4(),
		};

		props.onSubmitedData(userData);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";

		// setUsernameData("");
		// setAgeData("");
	};

	return (
		<form onSubmit={onSubmitHandler} className={styles["main-window"]}>
			<label htmlFor="username">Username</label>
			<input
				// onChange={usernameDataHandler}
				// value={usernameData}
				type="text"
				id="username"
				ref={nameInputRef}
			/>

			<label htmlFor="age">Age (Years)</label>
			<input
				// onChange={ageDataHandler}
				// value={ageData}
				type="number"
				id="age"
				ref={ageInputRef}
			/>

			<button type="submit" className={styles.addUserBtn}>
				Add user
			</button>
		</form>
	);
};

export default MainWindow;
