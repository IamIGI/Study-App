import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItems from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UserList.style';

const UsersList = () => {
    const [users, setUsers] = useState(usersData);

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name); //create new array with all the elements that pass the statement
        setUsers(filteredUsers);
    };

    return (
        <Wrapper>
            <h1>Students list</h1>
            <StyledList>
                {users.map((userData) => (
                    <UsersListItems deleteUser={deleteUser} key={userData.name} userData={userData} />
                ))}
            </StyledList>
        </Wrapper>
    );
};

export default UsersList;
