import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";
import { Button } from '@mui/material'

export const Navigation = () => {
    const {isLoggedIn} = useAuth()

    return <nav >
        <NavLink style={{marginRight:50}} to = "/">
            <Button variant="outlined" size="large">Home</Button>
            
        </NavLink>
        {isLoggedIn && (
        <NavLink to = "/contacts">
        <Button >Contacts</Button>
        </NavLink>
        )}
    </nav>
}