//This file helps to extend required imports to other files, where this file will be imported (check FormField.test.js)

import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

export const renderWithThemeProvider = (children) => {
    return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>); //children = FormField
};
