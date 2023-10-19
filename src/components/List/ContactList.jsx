import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ visibleContacts, handleDelete, contacts }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            visibleContacts={visibleContacts}
            handleDelete={handleDelete}
          ></Contact>
        );
      })}
    </List>
  );
};
