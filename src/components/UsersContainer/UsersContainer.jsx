import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Users } from '../Users/Users';

export const UsersContainer = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <Users />
      ) : (
        <div className='usersContainer'>
          <h1>Please log in to access this section</h1>
        <Link to='/login' className='link'>
          <h3>Go to login</h3>
        </Link>
        </div>
      )}
    </>
  );
};
