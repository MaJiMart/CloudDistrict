import { useAuth0 } from '@auth0/auth0-react';

export const ButtonLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className='btnLogin' onClick={() => loginWithRedirect()}>
      Login
    </button>
  );
};
