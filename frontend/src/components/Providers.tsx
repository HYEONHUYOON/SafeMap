import { SettingsProviders } from "@/contexts/SettingsContext"

export const Providers = ({children} : {children : React.ReactNode}) => {
    return(
        <SettingsProviders>
            {children}
        </SettingsProviders>
    )
}