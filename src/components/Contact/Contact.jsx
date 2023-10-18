import { DeleteBtn, Item, Name } from './Contact.styled';

export const Contact = ({ name, number, setContacts, id }) => {
  const handleDelete = e => {
    setContacts(prevState => {
      return {
        contacts: [...prevState.contacts].filter(
          contact => contact.id !== e.target.id
        ),
      };
    });
  };

  return (
    <Item key={id}>
      <Name>
        {name}: {number}
      </Name>
      <DeleteBtn type="button" onClick={handleDelete} id={id}>
        Delete
      </DeleteBtn>
    </Item>
  );
};
