import { createContext, ReactNode,  useState } from 'react';

interface propsContextSearch {
    children: ReactNode
};

interface typeContextSearch {
    search: string,
    setSearch: (inputValue: string) => void
};

export const SearchContext = createContext({} as typeContextSearch);

export const SearchStore = ({children}: propsContextSearch) => {
    
    const [search, setSearch] = useState('');
        
    return(
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )    
};

