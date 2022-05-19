import React from 'react';
import { users } from 'data/users';
import UsersListItems from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.style';
import { StyledList } from './UserList.style';

class UsersList extends React.Component {
    state = {
        isUsersList: false,
    };

    render() {
        return (
            <Wrapper>
                <h1>{this.state.isUsersList ? `User's list` : 'Students list'}</h1>
                <button onClick={() => this.setState({ isUsersList: !this.state.isUsersList })}>
                    Change title
                </button>
                <StyledList>
                    {users.map((userData, index) => (
                        <UsersListItems key={userData.name} userData={userData} />
                    ))}
                </StyledList>
            </Wrapper>
        );
    }
}

export default UsersList;
