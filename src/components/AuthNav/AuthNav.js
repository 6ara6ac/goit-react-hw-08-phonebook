import { NavLink } from "react-router-dom";
import {Button} from '@mui/material'

export const AuthNav = () => {
    return (
        <div>
        <NavLink style={{marginRight:50}} to="/register">
            <Button variant="contained">Register</Button>
        </NavLink>
        <NavLink to="/login">
        <Button variant="contained">Log In</Button>
        </NavLink>
        </div>
    )
}