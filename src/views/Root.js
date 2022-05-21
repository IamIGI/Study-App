import React from 'react';
import { ThemeProvider } from 'styled-components'; //use styles/theme.js everywhere you want
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import DashBoard from './DashBoard';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle /> {/* When importing global styles, import on the beginning !!! */}
                <MainTemplate>
                    <UsersProvider>
                        <Wrapper>
                            <Routes>
                                {' '}
                                {/* you refresh just that part of the application */}
                                <Route path="/add-user" element={<AddUser />} />
                                <Route path="/" element={<DashBoard />} />
                            </Routes>
                        </Wrapper>
                    </UsersProvider>
                </MainTemplate>
            </ThemeProvider>
        </BrowserRouter>
    );
};
export default Root;
