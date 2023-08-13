import React from "react";

import "./App.css";
import MainWindow from "./components/MainWindow/MainWindow";
import UserListList from "./components/userListList/userListList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
	return (
		<>
			<MainWindow />
			<UserListList />
			<ErrorModal />
		</>
	);
}

export default App;
