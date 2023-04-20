import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { TextField, Button, Box } from '@mui/material'




export const RegisterForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.currentTarget
        dispatch(register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value
    }))
    form.reset()
    }



    return (
        <form onSubmit={handleSubmit} autoComplete="off">
        <Box sx={{display:'flex', gap: '20px', flexDirection: 'column', maxWidth:'400px', margin:'auto'}}>
        <TextField label='User Name' type="text" name="name" variant="standard"/>
        <TextField label='Email' type="email" name="email" variant="standard"/>   
        <TextField label='Password' type="password" name="password" autoComplete="on" variant="standard"/>
        <Button size="large" variant="contained" type="submit">Register</Button>
        </Box>
        </form>

    )
}