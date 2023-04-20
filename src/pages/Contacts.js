import { ContactForm } from "../components/Phonebook/ContactForm";
import { ContactList } from "../components/ListContacts/ContactList";
import { Section } from "../components/Section/Section";
import { Filter } from "../components/Filter/Filter";
import { fetchContacts } from "redux/contacts/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "redux/contacts/selectors";




const Contacts = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);



  return <> 
  <Section mainTitle={'Phonebook'}>
  <ContactForm />
  </Section>
  <Section title={'Contacts'}>
  <Filter/>
  <div>{isLoading && 'Request in progress...'}</div>
  <ContactList />
  </Section>
  </>
  }

  export default Contacts
