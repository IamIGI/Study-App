import React from 'react';
import { users } from 'data/users';
import UsersListItems from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.style';
import { StyledList } from './UserList.style';

//this. -> you use function/ argument from class
class UsersList extends React.Component {
    state = {
        users,
    };

    deleteUser = (name) => {
        const filteredUsers = this.state.users.filter((user) => user.name !== name); //create new array with all the elements that pass the statement
        this.setState({ users: filteredUsers });
        console.log('Delete item');
    };

    render() {
        return (
            <Wrapper>
                <StyledList>
                    {this.state.users.map((userData) => (
                        <UsersListItems
                            deleteUser={this.deleteUser}
                            key={userData.name}
                            userData={userData}
                        />
                    ))}
                </StyledList>
            </Wrapper>
        );
    }
}

export default UsersList;
