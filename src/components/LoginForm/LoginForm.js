import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { TextField, Button, Box } from '@mui/material'



export const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.currentTarget
        dispatch(logIn({
        email: form.elements.email.value,
        password: form.elements.password.value
    }))
    form.reset()
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
        <Box sx={{display:'flex', gap: '20px', flexDirection: 'column', maxWidth:'400px', margin:'auto'}}>        
        <TextField label='Email' type="email" name="email"/>
        <TextField label='Password' type="password" name="password" autoComplete="on"/>
        <Button sx={{maxWidth:'200px',width:'100%' , margin:'auto'}} variant="outlined" type="submit">Log in</Button>
        </Box>
        </form>
    )
}