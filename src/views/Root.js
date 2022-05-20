import UsersList from 'components/organisms/UsersList/UsersList';
import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import { ThemeProvider } from 'styled-components'; //use styles/theme.js everywhere you want
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import DashBoard from './DashBoard';

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
};

const Root = () => {
    const [users, setUsers] = useState(usersData);
    const [formValues, setFormValue] = useState(initialFormState);

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name); //create new array with all the elements that pass the statement
        setUsers(filteredUsers);
    };

    const handleInputChange = (event) => {
        console.log(formValues);
        setFormValue({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const handleAddUser = (event) => {
        event.preventDefault();

        const newUser = {
            name: formValues.name,
            attendance: `${formValues.attendance}%`,
            average: formValues.average,
        };

        setUsers([newUser, ...users]);
        setFormValue(initialFormState);
    };

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle /> {/* When importing global styles, import on the beginning !!! */}
                <MainTemplate>
                    <Wrapper>
                        <Routes>
                            {' '}
                            {/* you refresh just that part of the application */}
                            <Route
                                path="/add-user"
                                element={
                                    <AddUser
                                        formValues={formValues}
                                        handleAddUser={handleAddUser}
                                        handleInputChange={handleInputChange}
                                    />
                                }
                            />
                            <Route path="/" element={<DashBoard deleteUser={deleteUser} users={users} />} />
                        </Routes>
                    </Wrapper>
                </MainTemplate>
            </ThemeProvider>
        </BrowserRouter>
    );
};
export default Root;
