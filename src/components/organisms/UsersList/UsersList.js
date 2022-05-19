import React from 'react';
import { users } from 'data/users';
import UsersListItems from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UserList.style';
import { toHaveAccessibleDescription, toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (users) {
                resolve([...users]);
            } else {
                reject({ message: 'Error' });
            }
        }, 2000);
    });
};

//this. -> you use function/ argument from class
class UsersList extends React.Component {
    state = {
        users: [],
        isLoading: true,
    };

    //zachaczanie sie o poszczegolne etapy zycia naszego komponentu
    componentDidMount() {
        this.setState({ isLoading: true });
        mockAPI()
            .then((data) => {
                this.setState({ isLoading: false });
                this.setState({ users: data });
            })
            .catch((err) => console.log(err));
    }

    componentDidUpdate(_, prevState) {
        if (prevState.isLoading !== this.state.isLoading) {
            console.log('Loading state has changed');
        }
    }

    deleteUser = (name) => {
        const filteredUsers = this.state.users.filter((user) => user.name !== name); //create new array with all the elements that pass the statement
        this.setState({ users: filteredUsers });
        console.log('Delete item');
    };

    render() {
        return (
            <Wrapper>
                <h1>{this.state.isLoading ? 'Loading...' : 'Students list'}</h1>
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
