import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'; //Imported icon is a ReactComponent
import { StyledButton } from './Button.styles';

const Button = () => {
    return (
        <StyledButton>
            <DeleteIcon />
        </StyledButton>
    );
};

export default Button;
