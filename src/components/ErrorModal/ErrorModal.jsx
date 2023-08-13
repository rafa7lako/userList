import React from "react";

import styles from "./ErrorModal.module.css";

const ErrorModal = () => {
	return (
		<div className={styles['error-modal']}>
			<div className={styles['invalid-input-row']}>
				<h2>Invalid input</h2>
			</div>
			<p>Please enter a valid name and age (non-empty values)</p>
			<button className="modal-close">OK</button>
		</div>
	);
};

export default ErrorModal;
