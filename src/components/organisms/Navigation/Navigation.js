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
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/add-user">Add user</StyledLink>
                <StyledLink to="/settings">Settings</StyledLink>
                <StyledLink to="/logout">Logout</StyledLink>
            </Wrapper>
        </>
    );
};

Navigation.propTypes = {};
export default Navigation;
