import React from "react";

import styles from "./UserListItem.module.css";

const UserListItem = (props) => {
	return (
		<>
			<li className={styles.userListItem}>{props.username} {props.age}</li>
		</>
	);
};

export default UserListItem;
