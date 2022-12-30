import { ModalContactEdit } from 'components/ModalContactEdit/ModalContactEdit';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from 'redux/contacts/operations';
import { ContactStyled, NumberStyled, NameStyled, ButtonStyled } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <ContactStyled>
      <NameStyled>{name}</NameStyled>
      <NumberStyled>{number}</NumberStyled>
      <ButtonStyled type="button" onClick={handleDelete}>
        Delete
      </ButtonStyled>
      <ButtonStyled type="button" onClick={toggleModal}>
        Edit
      </ButtonStyled>
    {(showModal) && <ModalContactEdit id={id} name={name} number={number} onClose={toggleModal}/>}
    </ContactStyled>
  );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};