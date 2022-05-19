import React from 'react';
import propTypes from 'prop-types';

import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, Average, StudentData } from './UserListItem.style';

const UsersListItems = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
    <Wrapper>
        <Average average={average}>{average}</Average>
        <StudentData>
            <p>{name}</p>
            <p>attendance: {attendance}</p>
        </StudentData>
        <DeleteButton onClick={() => deleteUser(name)} />
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
