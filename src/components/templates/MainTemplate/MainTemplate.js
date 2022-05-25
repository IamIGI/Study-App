import Navigation from 'components/organisms/Navigation/Navigation';
import styled from 'styled-components';
import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import { theme } from 'assets/styles/theme';

const SearchBar = styled.div`
    grid-row: 1/2; //start from row border 1 end on row border 2
    grid-column: 2/3; //start from column border 2 and on column border 3
    border: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const MainTemplate = ({ children }) => {
    return (
        <>
            <Wrapper>
                <Navigation />
                <SearchBar />
                {children} {/* take elements that are between the MainTemplate element (in root f.e) */}
            </Wrapper>
        </>
    );
};

export default MainTemplate;
