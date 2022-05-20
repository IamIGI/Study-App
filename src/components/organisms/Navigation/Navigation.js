import React from 'react';
import { Logo, Wrapper, StyledLink } from './Navigation.styles';

const Navigation = () => {
    return (
        <>
            <Wrapper>
                <Logo>
                    <h1>
                        Study <br /> App
                    </h1>
                </Logo>
                <StyledLink activeClassName="active" to="/">
                    Dashboard
                </StyledLink>
                <StyledLink activeClassName="active" to="/add-user">
                    Add user
                </StyledLink>
                <StyledLink activeClassName="active" to="/settings">
                    Settings
                </StyledLink>
                <StyledLink activeClassName="active" to="/logout">
                    Logout
                </StyledLink>
            </Wrapper>
        </>
    );
};

export default Navigation;
