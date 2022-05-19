import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItems from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UserList.style';

const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usersData) {
                resolve([...usersData]);
            } else {
                reject({ message: 'Error' });
            }
        }, 2000);
    });
};

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoadingState] = useState(true);

    //useEffect , first argument is a function, second is a table of dependencies
    useEffect(() => {
        setLoadingState(true);
        mockAPI() //you get the usersData and then use is as a data in .then(given arg)
            .then((data) => {
                setLoadingState(false);
                setUsers(data);
            })
            .catch((err) => console.log(err));
    }, []); //you need to give empty table even when you don;t use it
    //When you give empty table / array, the function will be called just once!!

    useEffect(() => {
        // call function when the state of dependences (value form argument) change
        console.log('Loading state has changed');
    }, [isLoading]);

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name); //create new array with all the elements that pass the statement
        setUsers(filteredUsers);
    };

    return (
        <Wrapper>
            <h1>{isLoading ? 'Loading...' : 'Students list'}</h1>
            <StyledList>
                {users.map((userData) => (
                    <UsersListItems deleteUser={deleteUser} key={userData.name} userData={userData} />
                ))}
            </StyledList>
        </Wrapper>
    );
};

export default UsersList;
