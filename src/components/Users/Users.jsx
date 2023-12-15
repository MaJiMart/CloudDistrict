import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserContext } from '../../context/UserContext';
import { ButtonAdd } from '../Access/ButtonAdd';
import { ButtonLogout } from '../Access/ButtonLogout';

export const Users = () => {
  const { user } = useAuth0();
  const { users } = useUserContext();

  return (
    <div className='backUsers'>
      <div className='allUsers'>
        <header>
          <div className='divimg'>
            <img src='/assets/users.png' alt='users image' />
          </div>
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
              <ButtonLogout />
            </div>
          </div>
        </header>
        <div className='divAdd'>
          <Link to={'/newuser'}>
            <div className='tooltip'>
              <ButtonAdd />
              <span className='tooltiptext'>Add a user</span>
            </div>
          </Link>
        </div>
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
      </div>
    </div>
  );
};
