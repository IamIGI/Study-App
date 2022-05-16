import React from 'react';
import { users } from 'data/users';
import UsersListItems from '../UsersListItem/UsersListItem';
import styles from './UsersList.module.scss';

const UsersList = () => {
    return (
        <div className={[styles.container, false ? styles.hasBorder : styles.hasRedBorder].join(' ')}>
            {/*  <div className={'${styles.container} ${ styles.hasRedBorder }'}> */}
            <ul>
                {users.map((userData) => (
                    <UsersListItems userData={userData} />
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
