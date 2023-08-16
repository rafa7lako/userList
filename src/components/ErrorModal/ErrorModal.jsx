import React, { useState } from "react";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
	const [btnClicked, isBtnClicked] = useState(false);

	const onBtnClicked = () => {
		if (btnClicked === false) {
			isBtnClicked(true);
			props.isBtnClicked(false)
		} else if (btnClicked === true) {
			isBtnClicked(false);
			props.isBtnClicked(true)
		}
	};

	return (
		<>
			<div className={`${styles["error-modal"]} `}>
				<div className={styles["invalid-input-row"]}>
					<h2>Invalid input</h2>
				</div>
				<p>Please enter a valid name and age (non-empty values)</p>
				<button onClick={onBtnClicked} className="modal-close">OK</button>
			</div>
			<div onClick={onBtnClicked} className={`${styles.shadow}`}></div>
		</>
	);
};

export default ErrorModal;
