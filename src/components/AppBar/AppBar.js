import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "hooks";

export const AppBar = () => {
    const {isLoggedIn} = useAuth()



    return (
        <header style={{display: "flex", justifyContent:'space-around', marginBottom:50}}>
        <Navigation/>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}