import { useEffect, useState } from 'react';

export const useWindowHeight = () => {
    const [dimensions, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        });
    }, []); //remember about dependencies, as a second argument
    //cuz there is no dependencies, the function is running in circle. We can track window size values in present

    return dimensions;
};
