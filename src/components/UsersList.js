import React from 'react';
import { users } from 'data/users';
import UsersListItems from './UsersListItem/UsersListItem';

const UsersList = () => {
    return (
        <div>
            <ul>
                {users.map((userData) => (
                    <UsersListItems userData={userData} />
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
