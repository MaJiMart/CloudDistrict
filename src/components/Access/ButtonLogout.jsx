import { useAuth0 } from '@auth0/auth0-react';

export const ButtonLogout = () => {
  const { logout } = useAuth0();

  return (
    <button className='btnLogout' onClick={() => logout()}>
      Logout
    </button>
  );
};
