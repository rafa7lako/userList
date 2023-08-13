import React from "react";

import styles from "./MainWindow.module.css";

const MainWindow = () => {
	return (
		<div className={styles['main-window']}>
			<label htmlFor="username">Username</label>
			<input type="text" id="username" />

			<label htmlFor="age">Age (Years)</label>
			<input type="number" id="age" />

			<button className={styles.addUserBtn}>Add user</button>
		</div>
	);
};

export default MainWindow;
