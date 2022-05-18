import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'; //Imported icon is a ReactComponent
import { StyledButton } from './Button.styles';

//'click' - onClick
//'mouseenter' - onMouseEnter

const Button = (props) => {
    return (
        <StyledButton {...props}>
            {' '}
            {/* spread operator */}
            <DeleteIcon />
        </StyledButton>
    );
};

export default Button;
