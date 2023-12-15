import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBar } from '../NavBar/NavBar';
import { ButtonContinue } from '../Access/ButtonContinue';

export const Welcome = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className='backWelcome'>
      <NavBar />
      <div className='welcome'>
        <div className='infoWelcome'>
          <h1>Welcome!</h1>
          <p>This is a technical test. Please click the arrow to continue</p>
          <div className='btnIn'>
            {!isAuthenticated ? (
              <Link to={'/login'}>
                <ButtonContinue />
              </Link>
            ) : (
              <Link to={'/users'}>
                <ButtonContinue />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div >
  );
};
