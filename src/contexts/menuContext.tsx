import { createContext, ReactNode,  useState } from 'react';

interface propsContextMenu {
    children: ReactNode
};

interface typeContextMenu {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
};

export const MenuContext = createContext({} as typeContextMenu);

export const MenuStore = ({children}: propsContextMenu) => {
    
    const [openMenu, setOpenMenu] = useState(true);
        
    return(
        <MenuContext.Provider value={{openMenu, setOpenMenu}}>
            {children}
        </MenuContext.Provider>
    )    
};

