
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { Formik, Form, Field } from "formik"
import { addContact } from "redux/contacts/operations";
import { TextField, Button, Box } from '@mui/material'


export const ContactForm = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(selectContacts)
    
    const handleSubmit = (values, actions) => {
      const {name, number} = values
      const alreadyContact = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number)
      if (alreadyContact) {
        return alert (`${name} is alredy in phonebook`);
      }
      dispatch(addContact(values))
      actions.resetForm()
  }

          
       return <>
      <Formik initialValues={{name: '', number: ''}} onSubmit={ handleSubmit } >
        <Form>
          <Box sx={{display: 'flex', gap: '10px'}}>
          <Field 
        type="text"
        name="name"
        label="name"
        as={TextField}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        <Field
        type="tel"
        name="number"
        label='number'
        as={TextField}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
            <Button variant="outlined" type="submit">Add contact</Button>
            </Box>
        </Form>
    </Formik>
   
    </>

      
}
