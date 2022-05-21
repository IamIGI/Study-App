import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
};

const AddUser = () => {
    const [formValues, setFormValue] = useState(initialFormState);
    const { handleAddUser } = useContext(UsersContext); //declare from which context you want to download data

    const handleInputChange = (event) => {
        setFormValue({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmitUser = (event) => {
        event.preventDefault();
        handleAddUser(formValues);
        setFormValue(initialFormState);
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
            <Button type="submit">Add</Button>
        </ViewWrapper>
    );
};

export default AddUser;
