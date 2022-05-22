import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <p>Page not found. {<Link to={'/'}>You can return to the main</Link>}</p>
  );
};
