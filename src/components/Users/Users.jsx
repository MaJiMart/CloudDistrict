import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserContext } from '../../context/UserContext';
import { ButtonAdd } from '../Access/ButtonAdd';
import { ButtonLogout } from '../Access/ButtonLogout';

export const Users = () => {
  const { user, isAuthenticated } = useAuth0();
  const { users } = useUserContext();

  return (
    isAuthenticated && (
      <div className='allUsers'>
        <header>
          <img src='/assets/users3.png' alt='header users image' />
          <div className='infoLog'>
            <div className='uinfo'>
              {
                <img
                  src={user.picture}
                  alt='imagen de perfil del usuario logueado'
                  className='picLog'
                />
              }
            </div>
            <div>
              <ButtonLogout/>
            </div>
          </div>
        </header>
        <div className='cardsContainer'>
          {users.map((user) => (
            <div key={user.id} className='userCard'>
              <img
                src={user.avatar}
                alt={`Avatar de ${user.first_name}`}
                className='cardPic'
              />
              <p>{user.first_name}</p>
              <div className='card-footer'>
                <Link to={`/user/${user.id}`}>
                  <button className='btnDetail'>Detail</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <footer>
          <Link to={'/newuser'}>
            <div className='tooltip'>
              <ButtonAdd />
              <span className='tooltiptext'>Add a user</span>
            </div>
          </Link>
        </footer>
      </div>
    ) 
  );
};
