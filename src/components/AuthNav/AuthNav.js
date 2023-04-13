import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return (
        <div>
        <NavLink style={{marginRight:50}} to="/register">
            Register
        </NavLink>
        <NavLink to="/login">
            LogIn
        </NavLink>
        </div>
    )
}