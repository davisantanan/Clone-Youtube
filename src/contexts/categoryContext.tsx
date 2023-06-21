import { createContext, ReactNode,  useState } from 'react';

interface propsContextCategory {
    children: ReactNode
};

interface typeContextCategory {
    categoryId: string,
    setCategoryId: (categoryId: string) => void;
};

export const CategoryContext = createContext({} as typeContextCategory);

export const CategoryStore = ({children}: propsContextCategory) => {

    const [categoryId, setCategoryId] = useState('0');
        
    return(
        <CategoryContext.Provider value={{ categoryId, setCategoryId }}>
            {children}
        </CategoryContext.Provider>
    )    
};

