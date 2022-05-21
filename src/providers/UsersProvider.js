import React, { useState } from 'react';
import { users as usersData } from 'data/users';

export const UsersContext = React.createContext({
    // create init context and export it to elements that are contain between tags
    users: [],
    handleAddUser: () => {},
    deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState(usersData);

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name); //create new array with all the elements that pass the statement
        setUsers(filteredUsers);
    };

    const handleAddUser = (values) => {
        const newUser = {
            name: values.name,
            attendance: `${values.attendance}%`,
            average: values.average,
        };
        setUsers([newUser, ...users]);
    };

    return (
        <>
            <UsersContext.Provider //wrap elements that will use context inside tags
                value={{
                    // users: [],
                    // handleAddUser: () => {},
                    // deleteUser: () => {},
                    //Instead you can write this like that:
                    users,
                    handleAddUser,
                    deleteUser, //cuz you are using the same name
                }}
            >
                {children} {/* Render all the children that are between tags of this element 'UsersContext.Provider' */}
            </UsersContext.Provider>
        </>
    );
};

UsersProvider.propTypes = {};
export default UsersProvider;
