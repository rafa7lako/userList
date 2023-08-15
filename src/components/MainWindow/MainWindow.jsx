import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./MainWindow.module.css";

const MainWindow = (props) => {
	const [usernameData, setUsernameData] = useState("");
	const [ageData, setAgeData] = useState("");

	const usernameDataHandler = (event) => {
		setUsernameData(event.target.value);
	};

	const ageDataHandler = (event) => {
		setAgeData(event.target.value);
	};


	

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const userData = {
			username: usernameData,
			age: ageData,
			key: uuidv4(),
		};

		props.onSubmitedData(userData);

		setUsernameData("");
		setAgeData("");
	};

	return (
		<form onSubmit={onSubmitHandler} className={styles["main-window"]}>
			<label htmlFor="username">Username</label>
			<input
				onChange={usernameDataHandler}
				value={usernameData}
				type="text"
				id="username"
			/>

			<label htmlFor="age">Age (Years)</label>
			<input onChange={ageDataHandler} value={ageData} type="number" id="age" />

			<button type="submit" className={styles.addUserBtn}>
				Add user
			</button>
		</form>
	);
};

export default MainWindow;
