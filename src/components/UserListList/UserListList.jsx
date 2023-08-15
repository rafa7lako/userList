import React from "react";

import styles from "./UserListList.module.css";
import UserListItem from "../UserListItem/UserListItem";

const UserListList = (props) => {
	console.log(props.dataArray[0]);
	return (
		<ul className={styles.userList}>
			{props.dataArray.map((user) => {
				return (<UserListItem username={user.username} age={user.age} key={user.key}/>);
			})}
		</ul>
	);
};

export default UserListList;
