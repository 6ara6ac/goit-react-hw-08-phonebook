import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { Item } from "./ContactsItem.styled";
import { Button } from '@mui/material'


export const ContactItem =({id, name , phone})=> {
    const dispatch = useDispatch()

    const handleDelete = () => dispatch(deleteContact(id))

    return <Item sx={{listStyleType: 'none'}} key={id}>{name} : {phone}
    <Button variant="outlined" onClick={handleDelete}>delete</Button>
    </Item>
}