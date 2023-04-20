import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useAuth } from "hooks";
import { Button, Box} from '@mui/material'

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user:{name} } = useAuth()


    return (
        <Box sx={{display:'flex', color:'black', gap: '30px'}}>
            <p>Welcome, {name}</p>
            <Button variant="contained" type="button" onClick={()=> dispatch(logOut())}>Log Out</Button>
        </Box>
    )
}