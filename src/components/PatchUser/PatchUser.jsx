import { useState } from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useUserContext } from '../../context/UserContext';
import { ButtonBack } from '../Access/ButtonBack';
import { ButtonHome } from '../Access/ButtonHome';

export const PatchUser = () => {
  const { API_URL } = useUserContext();
  const { uid } = useParams();
  
  const navigate = useNavigate()

  const [editData, setEditData] = useState({
    name: '',
    job: '',
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const saveChanges = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handlerEdit = () => {
    const url = API_URL + `users/${uid}`;
    axios
      .patch(url, editData)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            text: `User id ${uid} edited successfully`,
            showConfirmButton: false,
            timer: 3500,
            background: '#111111',
            color: '#fffbbb',
          });
        }
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setEditData({ name: '', job: '' });

        setTimeout(() => {
          navigate('/users');
        }, 4000);
      });
  };

  return (
      <div className='editUser'>
        <header>
          <div className='divimg'>
            <img src='/assets/editUser.png' alt='edit users image' />
          </div>
        </header>
        <div className='cardEdit'>
          <h1>You are editing the user with id {uid}</h1>
          <form className='formEdit' onSubmit={handlerSubmit}>
            <div className='dataEdit'>
              <h3>Name:</h3>
              <input
                className='editinp'
                id='name'
                type='text'
                name='name'
                placeholder='Write a new name'
                onChange={saveChanges}
                value={editData.name}
              />
              <h3>Job:</h3>
              <input
                className='editinp'
                id='job'
                type='text'
                name='job'
                placeholder='Write user job'
                onChange={saveChanges}
                value={editData.job}
              />
            </div>
            <div>
              {error && <span>{errorMessage}</span>}
              <input
                className='btnEdit'
                type='submit'
                value='Edit'
                onClick={handlerEdit}
              />
            </div>
          </form>
        </div>
        <footer>
          <Link to={`/user/${uid}`}>
            <ButtonBack />
          </Link>
          <Link to={'/users'}>
            <ButtonHome />
          </Link>
        </footer>
      </div>
    )
};
