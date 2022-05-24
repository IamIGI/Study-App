import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from 'helpers/renderWithProviders';
import AddUser from './AddUser';
import DashBoard from './DashBoard';

describe('Add user test:', () => {
    it('User adding, appear on DashBoard', () => {
        renderWithProviders(
            <>
                <AddUser />
                <DashBoard />
            </>
        ); // you render using this file
        fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Duncan' } });
        fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55' } });
        fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.2' } });
        fireEvent.click(screen.getByText('Add'));
        screen.getByText('Duncan');
    });
});
