import React, { useState } from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormField from './FormField';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Input with button', () => {
    it('Renders the components', () => {
        renderWithThemeProvider(<FormField label="name" name="name" id="name" />); // you render using this file
    });
});
