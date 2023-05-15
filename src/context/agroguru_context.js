import React, { createContext, useState } from 'react'

export const MainContext = createContext(null);

export const ContextProvider = (props) => {

    const [spin, setSpin] = useState(false);

    const contextValue = {spin,setSpin}

    return(
        <MainContext.Provider value={contextValue}>
            {props.children}
        </MainContext.Provider>
    )
}