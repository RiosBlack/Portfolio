import { createContext, useState } from 'react';

export const HeaderStateContext = createContext({});

const HeaderStateProvider = ({ children }: any) => {
    const [stateButton, setStateButton] = useState<Boolean>(true);

    return (
        <HeaderStateContext.Provider value={{ stateButton, setStateButton }}>
            {children}
        </HeaderStateContext.Provider>
    );
};

export default HeaderStateProvider;
