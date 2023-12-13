import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { ButtonAdd } from '../Access/ButtonAdd';

export const Users = () => {
  const { users, API_URL } = useUserContext();

  const handlerLogout = () => {
    const url = API_URL + 'logout';
    axios
      .post(url)
      .then((res) => {
        if (res.status === 200) {
          window.location.href = '/';
        }
      })
      .catch((error) => {
        console.error(error);
      })
  };

  return (
    <div className='allUsers'>
      <header>
        <img src='/assets/users3.png' alt='header users image' />
        <div className='infoLog'>
          <div className='uinfo'>
            <p>Aqui el nombre </p>
            {<img src='' alt='' />}
          </div>
          <input
            className='btnLogout'
            type='submit'
            value='Logout'
            onClick={handlerLogout}
          />
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
  );
};
