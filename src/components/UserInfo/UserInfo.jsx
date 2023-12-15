import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useUserContext } from '../../context/UserContext';
import { ButtonHome } from '../Access/ButtonHome';

export const UserInfo = () => {
  const { isAuthenticated } = useAuth0();
  const { API_URL } = useUserContext();
  const { uid } = useParams();

  const navigate = useNavigate()

  const [getUser, setGetUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = API_URL + `users/${uid}`;
        const res = await axios.get(url);
        setGetUser(res.data.data);
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
          navigate('/users');
        }, 4000);
      });
  };

  return (
    /* isAuthenticated && ( */
      <div className='userArea'>
        <header>
          <img src='/assets/u-back.png' alt='header users image' />
        </header>
        <div className='cardInfo'>
          {getUser && (
            <div className='info'>
              <div className='dataUser'>
                <h3>Name:</h3>
                <p>{getUser.first_name}</p>
                <h3>Last name:</h3>
                <p>{getUser.last_name}</p>
                <h3>Email:</h3>
                <p>{getUser.email}</p>
              </div>
              <div className='right'>
                <div className='picUser'>
                  <img src={getUser.avatar} alt={`Avatar de ${getUser.first_name}`} />
                </div>
                <div className='editUser'>
                  <div>
                    <Link to={`/user/edit/${getUser.id}`}>
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
    )
 /*  ); */
};
