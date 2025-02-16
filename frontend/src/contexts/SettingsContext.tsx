'use client'

import { createContext } from "react"

interface SettingContextType {
    darkMode : boolean;
}

const SettingContext = createContext<SettingContextType>({
    darkMode : false,
})

export const SettingsProviders = ({children} : {children : React.ReactNode}) => {

    return(
        <SettingContext.Provider value={{
            darkMode : false
        }}>
            {children}
        </SettingContext.Provider>
    )
}

export default SettingContext