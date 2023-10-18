import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ visibleContacts, handleDelete, contacts }) => {
  return (
    <List>
      {contacts.map(({ options, id }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={options.name}
            number={options.number}
            visibleContacts={visibleContacts}
            handleDelete={handleDelete}
          ></Contact>
        );
      })}
    </List>
  );
};
