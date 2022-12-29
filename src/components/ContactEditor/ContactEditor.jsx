import { FormStyled, InputStyled, ButtonStyled } from './ContactEditor.styled';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled name="name" />
      <InputStyled name="number" />
      <ButtonStyled type="submit">
        Add task
      </ButtonStyled>
    </FormStyled>
  );
};
