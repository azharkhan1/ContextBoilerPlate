import React, { useContext, useState } from "react";

const GlobalStateContext = React.createContext()
const GlobalStateUpdateContext = React.createContext()

export var useGlobalState = () => useContext(GlobalStateContext)
export var useGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)

export function GlobalStateProvider({ children }) {
    const [data, setData] = useState({
        user: null,
        darkTheme: true
    })

    return (
        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>
    )
} 