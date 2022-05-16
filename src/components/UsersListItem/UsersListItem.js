import React from 'react';
import propTypes from 'prop-types';
import styles from './UsersListItem.module.scss';

const UsersListItems = ({ userData: { average, name, attendance = '0%' } }) => (
    <li className={styles.container}>
        <div>{average}</div>
        <div>
            <p>{name}</p>
            <p>attendance: {attendance}</p>
        </div>
        <button>X</button>
    </li>
);

UsersListItems.propTypes = {
    userData: propTypes.shape({
        average: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        attendance: propTypes.string,
    }),
};
export default UsersListItems;
