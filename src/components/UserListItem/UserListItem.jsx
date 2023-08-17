import React from "react";

import styles from "./UserListItem.module.css";

const UserListItem = (props) => {
	return (
		<React.Fragment>
			<li className={styles.userListItem}>{props.username} {props.age}</li>
		</React.Fragment>
	);
};

export default UserListItem;
