import React, { useContext, useReducer } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
    consent: false,
    error: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INPUT CHANGE':
            return {
                ...state,
                [action.field]: action.value,
            };
        case 'CLEAR VALUES':
            return initialFormState;
        case 'CONSENT TOGGLE':
            return {
                ...state,
                consent: !state.consent,
            };
        case 'THROW ERROR':
            return {
                ...state,
                error: action.errorValue,
            };
        default:
            return state;
    }
};

const AddUser = () => {
    const [formValues, dispatch] = useReducer(reducer, initialFormState); //useReducer(function, initialState)
    const { handleAddUser } = useContext(UsersContext); //declare from which context you want to download data

    const handleInputChange = (event) => {
        dispatch({
            type: 'INPUT CHANGE',
            field: event.target.name,
            value: event.target.value,
        });
    };

    const handleSubmitUser = (event) => {
        event.preventDefault();
        console.log(formValues.consent);
        if (formValues.consent) {
            handleAddUser(formValues);
            dispatch({
                type: 'CLEAR VALUES',
            });
        } else {
            dispatch({ type: 'THROW ERROR', errorValue: 'You need to check to consent checkbox' });
        }
    };

    return (
        <ViewWrapper as="form" onSubmit={handleSubmitUser}>
            {/*div as form */}
            <Title>Add new students</Title>
            <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
            <FormField
                label="Attendance"
                id="attendance"
                name="attendance"
                value={formValues.attendance}
                onChange={handleInputChange}
            />
            <FormField
                label="Average"
                id="average"
                name="average"
                value={formValues.average}
                onChange={handleInputChange}
            />
            <FormField
                label="Consent"
                id="average"
                name="consent"
                type="checkbox"
                value={formValues.consent}
                onChange={() => dispatch({ type: 'CONSENT TOGGLE' })}
            />
            <Button type="submit">Add</Button>
            {formValues.error && <p>{formValues.error}</p>}
        </ViewWrapper>
    );
};

export default AddUser;
