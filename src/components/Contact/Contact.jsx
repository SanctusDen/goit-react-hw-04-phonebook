import { DeleteBtn, Item, Name } from './Contact.styled';

export const Contact = ({ name, number, handleDelete, id }) => {
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
