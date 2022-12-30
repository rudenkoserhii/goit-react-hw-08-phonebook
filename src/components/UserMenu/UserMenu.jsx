import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, Text, ButtonStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Text>Welcome, {user.name}</Text>
      <ButtonStyled type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonStyled>
    </Wrapper>
  );
};
