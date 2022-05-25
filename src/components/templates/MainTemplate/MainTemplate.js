import Navigation from 'components/organisms/Navigation/Navigation';
import styled from 'styled-components';
import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import { Input } from 'components/atoms/Input/Input';

const SearchBarWrapper = styled.div`
    grid-row: 1/2; //start from row border 1 end on row border 2
    grid-column: 2/3; //start from column border 2 and on column border 3
    border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 40px;

    ${Input} {
        font-size: ${({ theme }) => theme.fontSize.xl};
        width: 100%;
        max-width: 350px;
    }
`;

const StatusInfo = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-right: 40px;

    p {
        margin: 5px;
    }
`;

const SearchBar = () => (
    //remmber about right braces
    <SearchBarWrapper>
        <StatusInfo>
            <p>Logged as:</p>
            <p>
                <strong>Teacher</strong>
            </p>
        </StatusInfo>
        <Input />
    </SearchBarWrapper>
);

const News = styled.div`
    grid-row: 1/3;
    grid-column: 3/3;
    border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const MainTemplate = ({ children }) => {
    return (
        <>
            <Wrapper>
                <Navigation />
                <SearchBar />
                {children} {/* take elements that are between the MainTemplate element (in root f.e) */}
                <News>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                </News>
            </Wrapper>
        </>
    );
};

export default MainTemplate;
