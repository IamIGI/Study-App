import UsersList from 'components/organisms/UsersList/UsersList';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.lightGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 5% 0%;
`;

const Root = () => (
    <ThemeProvider theme={theme}>
        {' '}
        {/* teleport for data */}
        <GlobalStyle /> {/* When importing global styles, import on the begining !!! */}
        <Wrapper>
            <UsersList />
        </Wrapper>
    </ThemeProvider>
);

export default Root;
