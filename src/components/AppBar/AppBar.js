import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "hooks";
import { AppBar, Box, Toolbar } from '@mui/material'

export const ButtonAppBar = () => {
    const {isLoggedIn} = useAuth()



    return (
        <Box sx={{ flexGrow: 1, }}>
        <AppBar sx={{backgroundColor:'#fff', padding:'0 50px'}}>
        <Toolbar sx={{justifyContent:'space-between'}}>
        <Navigation/>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </Toolbar>
        </AppBar>
        </Box>
    )
}