import React from 'react';
import propTypes from 'prop-types';

import Button from 'components/atoms/Button/Button';
import { Wrapper, Average, StudentData } from './UserListItem.style';

const showIndex = (index) => alert(`This is student #${index + 1} `); //function called from line 16

const UsersListItems = ({ index, userData: { average, name, attendance = '0%' } }) => (
    <Wrapper>
        <Average average={average}>{average}</Average>
        <StudentData>
            <p>{name}</p>
            <p>attendance: {attendance}</p>
        </StudentData>
        <Button onClick={() => showIndex(index)} />{' '}
        {/* to use showIndex method with arguments, you have to call it by using function that will provide arguments */}
    </Wrapper>
);

UsersListItems.propTypes = {
    //declare model of data
    userData: propTypes.shape({
        average: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        attendance: propTypes.string,
    }),
};
export default UsersListItems;
