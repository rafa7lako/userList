import React, { useState } from "react";

import "./App.css";
import MainWindow from "./components/MainWindow/MainWindow";
import UserListList from "./components/userListList/userListList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

const userArray = [];

function App() {
	
	const [userListArray, setUserListArray] = useState(userArray);

	

	const submitedData = (inputData) =>{

		setUserListArray((prevData) => {
			return [inputData, ...prevData];
		});

	};

	

	

	return (
		<>
			<MainWindow onSubmitedData={submitedData}/>
			{userListArray.length < 1 && <p>There are no users added.</p>}
			{userListArray.length > 0 && <UserListList dataArray={userListArray}/>}

			<ErrorModal />
		</>
	);
}

export default App;
