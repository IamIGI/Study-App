import React from 'react';
import UsersListItems from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserList.style';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const UsersList = ({ users, deleteUser }) => {
    return (
        <>
            <Title>Students list</Title>
            <StyledList>
                {users.map((userData) => (
                    <UsersListItems deleteUser={deleteUser} key={userData.name} userData={userData} />
                ))}
            </StyledList>
        </>
    );
};

export default UsersList;
