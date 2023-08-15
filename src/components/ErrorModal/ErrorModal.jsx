import React, { useState } from "react";

import styles from "./ErrorModal.module.css";

const ErrorModal = () => {
	const [btnClicked, isBtnClicked] = useState(false);

	const onBtnClicked = () => {
		if (btnClicked === false) {
			isBtnClicked(true);
		} else {
			isBtnClicked(false);
		}
	};

	return (
		<>
			<div className={`${styles["error-modal"]} ${btnClicked && styles.hidden}`}>
				<div className={styles["invalid-input-row"]}>
					<h2>Invalid input</h2>
				</div>
				<p>Please enter a valid name and age (non-empty values)</p>
				<button onClick={onBtnClicked} className="modal-close">OK</button>
			</div>
			<div  className={`${styles.shadow} ${btnClicked && styles.hidden}`}></div>
		</>
	);
};

export default ErrorModal;
