import { useAuth } from 'hooks';
import { NavLinkStyled } from './NavLinkStyled.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkStyled to="/">
        Home
      </NavLinkStyled>
      {isLoggedIn && (
        <NavLinkStyled to="/tasks">
          Contacts
        </NavLinkStyled>
      )}
    </nav>
  );
};
