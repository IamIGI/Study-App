import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
    return (
        <>
            <Wrapper>
                <Navigation />
                {children} {/* take elements that are between the MainTemplate element (in root f.e) */}
            </Wrapper>
        </>
    );
};

export default MainTemplate;
