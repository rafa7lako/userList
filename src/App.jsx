import React, { useState } from "react";

import "./App.css";
import MainWindow from "./components/MainWindow/MainWindow";
import UserListList from "./components/UserListList/UserListList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

const userArray = [];

function App() {
	const [userListArray, setUserListArray] = useState(userArray);
	const [ifOutputModal, setIfOutputModal] = useState(false);

	const submitedData = (inputData) => {
		if (
			inputData.username.trim() != "" &&
			inputData.age != "" &&
			+inputData.age > 1
		) {
			setIfOutputModal(false);
			setUserListArray((prevData) => {
				return [inputData, ...prevData];
			});
		} else {
			setIfOutputModal(true);
		}
	};

	const isBtnClicked = (clicked) => {
		setIfOutputModal(clicked);
	};

	return (
		<React.Fragment>
			<MainWindow onSubmitedData={submitedData} />
			{userListArray.length < 1 && <p>There are no users added.</p>}
			{userListArray.length > 0 && <UserListList dataArray={userListArray} />}

			{ifOutputModal ? <ErrorModal isBtnClicked={isBtnClicked} /> : ""}
		</React.Fragment>
	);
}

export default App;
