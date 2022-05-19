import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 25px;
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    max-width: 500px;
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const StyledTitle = styled.h1`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    display: flex;
    justify-content: left;
    text-align: left;
    margin-left: 5%;
    padding-bottom: 5%;
`;
