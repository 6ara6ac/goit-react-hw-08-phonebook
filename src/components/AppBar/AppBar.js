import React from "react"
import { Navigation } from "../Navigation/Navigation";
import { AppBar, Box, Toolbar } from '@mui/material'

export const ButtonAppBar = () => {



    return (
        <Box sx={{ flexGrow: 1, }}>
        <AppBar sx={{backgroundColor:'#fff', padding:'0 50px'}}>
        <Toolbar sx={{justifyContent:'space-between'}}>
        <Navigation/>
        </Toolbar>
        </AppBar>
        </Box>
    )
}