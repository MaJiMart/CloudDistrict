import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../service/apirest';
import { ButtonHome } from '../Access/ButtonHome';

export const UserInfo = () => {
  const { uid } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = API_URL + `users/${uid}`;
        const res = await axios.get(url);
        setUser(res.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='userArea'>
      <header>
        <img src='/assets/u-back.png' alt='header users image' />
      </header>
      <div className='cardInfo'>
        {user && (
          <div className='info'>
            <div className='dataUser'>
              <h3>Name:</h3>
              <p>{user.first_name}</p>
              <h3>Last name:</h3>
              <p>{user.last_name}</p>
              <h3>Email:</h3>
              <p>{user.email}</p>
            </div>
            <div className='right'>
              <div className='picUser'>
                <img src={user.avatar} alt={`Avatar de ${user.first_name}`} />
              </div>
              <div className='editUser'>
                <div>
                  <Link to={`/user/edit/${user.id}`}>
                    <button className='btnEdit'>Edit</button>
                  </Link>
                  <Link to={''}>
                    <button className='btnDelete'>Delete</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer>
        <Link to={'/users'}>
          <ButtonHome />
        </Link>
      </footer>
    </div>
  );
};
