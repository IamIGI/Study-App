import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItems from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper, StyledTitle } from './UserList.style';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const UsersList = ({ users, deleteUser }) => {
    return (
        <>
            <Wrapper>
                <StyledTitle>Students list</StyledTitle>
                <StyledList>
                    {users.map((userData) => (
                        <UsersListItems deleteUser={deleteUser} key={userData.name} userData={userData} />
                    ))}
                </StyledList>
            </Wrapper>
        </>
    );
};

export default UsersList;
