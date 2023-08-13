import React from "react";

import styles from "./UserListList.module.css";
import UserListItem from "../UserListItem/UserListItem";

const UserListList = () => {
	return (
		<ul className={styles.userList}>
			<UserListItem />
		</ul>
	);
};

export default UserListList;
