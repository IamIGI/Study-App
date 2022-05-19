import React from 'react';
import { users } from 'data/users';
import UsersListItems from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.style';
import { StyledList } from './UserList.style';

const UsersList = () => {
    return (
        <Wrapper>
            <StyledList>
                {users.map((userData) => (
                    <UsersListItems key={userData.name} userData={userData} />
                ))}
            </StyledList>
        </Wrapper>
    );
};

export default UsersList;
