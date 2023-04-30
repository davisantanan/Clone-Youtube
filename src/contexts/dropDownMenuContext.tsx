import { createContext, ReactNode,  useState } from 'react';

interface propsContextDropMenu {
    children: ReactNode
};

interface typeContextDropMenu {
    openDropMenu: boolean,
    setOpenDropMenu: (openMenu: boolean) => void;
};

export const DropMenuContext = createContext({} as typeContextDropMenu);

export const DropMenuStore = ({children}: propsContextDropMenu) => {

    const [openDropMenu, setOpenDropMenu] = useState(false);
        
    return(
        <DropMenuContext.Provider value={{ openDropMenu, setOpenDropMenu }}>
            {children}
        </DropMenuContext.Provider>
    )    
};

