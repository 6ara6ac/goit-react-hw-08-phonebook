import { List } from "./ContactList.styled"
import { ContactItem } from "components/ContactItem/ComtactItem";
import { useSelector } from "react-redux"
import { selectVisibleContacts } from "redux/contacts/selectors"

export const ContactList = () => {
  const contactsList = useSelector(selectVisibleContacts)

  

    
  
    return <List>
    {contactsList.length > 0 && contactsList.map(({id, name, number})=>{
      return (
      <ContactItem
      key={id}
      id={id}
      name={name}
      phone={number}/>
      );
    })}

    </List>
}

