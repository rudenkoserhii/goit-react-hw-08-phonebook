import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactStyled, NumberStyled, NameStyled, ButtonStyled } from './Contact.styled';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  // const handleEdit = () => dispatch(editContact(id));

  return (
    <ContactStyled>
      <NameStyled>{name}</NameStyled>
      <NumberStyled>{phone}</NumberStyled>
      <ButtonStyled type="button" onClick={handleDelete}>
        Delete
      </ButtonStyled>
      <ButtonStyled type="button" onClick={handleEdit}>
        Edit
      </ButtonStyled>
    </ContactStyled>
  );
};
