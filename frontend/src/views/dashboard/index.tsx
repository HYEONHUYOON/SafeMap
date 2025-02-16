'use client'

import { useContext } from "react"

import { Box } from "@mui/material"

import SettingContext from "@/contexts/SettingsContext"

const DashboardView = () => {
    const context = useContext(SettingContext)

    console.log(context)

    return (
        <Box>
            B
        </Box>
    )
}

export default DashboardView