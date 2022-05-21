import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: scroll;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 150px 1fr; //navigation bar will take 150px of the website width
    background-color: ${({ theme }) => theme.colors.lightGrey};
`;
