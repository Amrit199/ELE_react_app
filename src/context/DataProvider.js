import { createContext, useContext, useState } from "react";

const DataContext = createContext()

export const DataContextProvider = ({ children }) => {
    const [leto, setLeto] = useState({})

    return(
        <DataContext.Provider value={{ leto, setLeto}}>
            {children}
        </DataContext.Provider>
    )
}

export const DataAuth = () => {
    return useContext(DataContext)
}