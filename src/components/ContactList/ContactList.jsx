import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectAllContacts } from 'redux/contacts/selectors';
import { ContactListStyled } from './ContactList.styled';

export const ContactList = () => {
    const contacts = useSelector(selectAllContacts);
    const filter = useSelector(state => state.filter.value);

  return (
    <ContactListStyled>
      {contacts
            .filter(contact => contact.name.toLowerCase().includes(filter))
            .map(({ id, name, number }) => (
            <li key={id}>
            <Contact id={id} name={name} number={number} />
            </li>
      ))}
    </ContactListStyled>
  );
};
