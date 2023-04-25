import React from "react"
import { NavLink } from "react-router-dom";
import { Button } from '@mui/material'

export const Navigation = () => {

    return <nav >
        <NavLink style={{marginRight:50}} to = "/">
            <Button variant="outlined" size="large">Home</Button>
        </NavLink>
        <NavLink to = "/tweets">
        <Button >Tweets</Button>
        </NavLink>
        
    </nav>
}