import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useUserContext } from '../../context/UserContext';
import { ButtonHome } from '../Access/ButtonHome';

export const UserInfo = () => {
  const { API_URL } = useUserContext();
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

  const handlerDel = () => {
    const url = API_URL + `users/${uid}`;
    axios
      .delete(url)
      .then((res) => {
        if (res.status === 204) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `User id ${uid} was deleted`,
            showConfirmButton: false,
            timer: 3500,
            background: '#111111',
            color: '#d095fa',
          });
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setTimeout(() => {
          window.location.href = '/users';
        }, 4000);
      });
  };

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
                  <input
                    className='btnDelete'
                    type='submit'
                    value='Delete'
                    onClick={handlerDel}
                  />
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
