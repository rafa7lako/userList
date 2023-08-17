import React, { useState } from "react";
import ReactDOM from 'react-dom'

import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
	return (
		<div onClick={props.onClick} className={`${styles.shadow}`}></div>
	);
};

const ModalOverlay = (props) => {
	return (
		<div className={`${styles["error-modal"]} `}>
			<div className={styles["invalid-input-row"]}>
				<h2>Invalid input</h2>
			</div>
			<p>Please enter a valid name and age (non-empty values)</p>
			<button onClick={props.onClick} className="modal-close">
				OK
			</button>
		</div>
	);
};

const ErrorModal = (props) => {
	const [btnClicked, isBtnClicked] = useState(false);

	const onBtnClicked = () => {
		if (btnClicked === false) {
			isBtnClicked(true);
			props.isBtnClicked(false);
		} else if (btnClicked === true) {
			isBtnClicked(false);
			props.isBtnClicked(true);
		}
	};

	return <React.Fragment>
		{ReactDOM.createPortal(<Backdrop onClick={onBtnClicked}/>, document.getElementById('backdrop-root'))}
		{ReactDOM.createPortal(<ModalOverlay onClick={	onBtnClicked}/>, document.getElementById('overlay-root'))}
	</React.Fragment>;
};

export default ErrorModal;
