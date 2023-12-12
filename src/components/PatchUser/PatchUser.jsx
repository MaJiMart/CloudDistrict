import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../service/apirest';
import { ButtonBack } from '../Access/ButtonBack';
import { ButtonHome } from '../Access/ButtonHome';

export const PatchUser = () => {
  const { uid } = useParams();
  return (
    <div className='editUser'>
      <header>
        <img src='/assets/edituser.png' alt='header users image' />
      </header>
      <div className='cardEdit'>
        <h1>You are editing the user {uid}:</h1>
        <h3>Name:</h3>
        <input
          className='editinp'
          id='name'
          type='text'
          name='name'
          placeholder='Write a new name'
          /* onChange={saveChanges} */
          /* value={formData.email} */
        />
        <h3>Job:</h3>
        <input
          className='editinp'
          id='job'
          type='text'
          name='job'
          placeholder='Write user job'
          /* onChange={saveChanges} */
          /* value={formData.email} */
        />
        <div>
          <button className='btnEdit'>Edit</button>
        </div>
      </div>
      <footer>
        <Link to={`/user/${uid}`}>
          <ButtonBack />
        </Link>
        <Link to={'/users'}>
          <ButtonHome/>
        </Link>
      </footer>
    </div>
  );
};
