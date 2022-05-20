import React from 'react';
import PropTypes from 'prop-types';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UserShape } from 'types';

const DashBoard = ({ users, deleteUser }) => {
    return (
        <ViewWrapper>
            <UsersList users={users} deleteUser={deleteUser} />
        </ViewWrapper>
    );
};

DashBoard.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
    deleteUser: PropTypes.func,
};
export default DashBoard;
