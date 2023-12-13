import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useUserContext } from '../../context/UserContext';
import { ButtonHome } from '../Access/ButtonHome';

export const NewUser = () => {
  const { API_URL } = useUserContext();

  const [data, setData] = useState({
    name: '',
    job: '',
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const saveChanges = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlerAdd = () => {
    const url = API_URL + 'users';
    axios
      .post(url, data)
      .then((res) => {
        if (res.status === 201) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            text: `User was created successfully`,
            showConfirmButton: false,
            timer: 3500,
            background: '#111111',
            color: '#ff99bd',
          });
        }
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setData({ name: '', job: '' });

        setTimeout(() => {
          window.location.href = '/users';
        }, 4000);
      });
  };

  return (
    <div className='createUser'>
      <header>
        <img src='/assets/newuser.png' alt='header users image' />
      </header>
      <div className='cardCreate'>
        <h1> Create a new one: </h1>
        <form className='formAdd' onSubmit={handlerSubmit}>
          <div className='newData'>
            <h3>Name:</h3>
            <input
              className='editinp'
              id='name'
              type='text'
              name='name'
              placeholder='Write a name'
              onChange={saveChanges}
              value={data.name}
            />
            <h3>Job:</h3>
            <input
              className='editinp'
              id='job'
              type='text'
              name='job'
              placeholder='Write user job'
              onChange={saveChanges}
              value={data.job}
            />
          </div>
          <div>
            {error && <span>{errorMessage}</span>}
            <input
              className='btnAdd'
              type='submit'
              value='Create'
              onClick={handlerAdd}
            />
          </div>
        </form>
      </div>
      <footer>
        <Link to={'/users'}>
          <ButtonHome />
        </Link>
      </footer>
    </div>
  );
};
