import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'

const LawyersContext = createContext();
export function LawyersProvider({ children }) {

    const [alllawyers, setAllLawyers] = useState("")
    const [lawtype, setLawType] = useState("")
    return (
        <LawyersContext.Provider value={{alllawyers, setAllLawyers, lawtype, setLawType}}>
            {children}
        </LawyersContext.Provider>
    )
}
function useLawyers() {
    return useContext(LawyersContext)
}

export default useLawyers;