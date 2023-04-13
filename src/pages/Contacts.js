import { ContactForm } from "../components/Phonebook/ContactForm";
import { ContactList } from "../components/ListContacts/ContactList";
import { Section } from "../components/Section/Section";
import { Filter } from "../components/Filter/Filter";



export const Contacts = () => {


  return <> 
  <Section mainTitle={'Phonebook'}>
  <ContactForm />
  </Section>
  <Section title={'Contacts'}>
  <Filter/>
  <ContactList />
  </Section>
  </>
  }
