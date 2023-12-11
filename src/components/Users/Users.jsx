import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../service/apirest';
import axios from 'axios';
import { ButtonAdd } from '../Access/ButtonAdd';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = API_URL + 'users?per_page=5';
        const res = await axios.get(url);
        setUsers(res.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='allUsers'>
      <header>
        <img src='/assets/users3.png' alt='header users image' />
        <div className='infoLog'>
          <div className='uinfo'>
            <p>Aqui el nombre </p>
            <img src='' alt='' />
          </div>
          <input className='btnLogout' type='submit' value='Logout' />
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
              <Link to={`/api/users/${user.id}`}>
                <button className='btnDetail'>Detail</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <Link to={'/api/newuser'}>
          <div className='tooltip'>
            <ButtonAdd />
            <span class="tooltiptext">Add a user</span>
          </div>
        </Link>
      </footer>
    </div>
  );
};
