import React from 'react';
import { users } from 'data/users';
import UsersListItems from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.style';
import { StyledList } from './UserList.style';

class UsersList extends React.Component {
    state = {
        listTitle: `User's list: `,
    };

    render() {
        return (
            <Wrapper>
                <h1>{this.state.listTitle}</h1>
                <button onClick={() => this.setState({ listTitle: 'Students list' })}>Change title</button>
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
