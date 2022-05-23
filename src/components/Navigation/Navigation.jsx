import { NavWrapper, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavWrapper>
      <Link to="/">Home</Link>
      <Link to="/movies">Movie</Link>
    </NavWrapper>
  );
};
