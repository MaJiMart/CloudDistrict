import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavBar } from '../NavBar/NavBar';
import { LoginFacebook } from '../Access/LoginFacebook';
import { LoginGoogle } from '../Access/LoginGoogle';
import { LoginTwitter } from '../Access/LoginTwitter';
import { API_URL } from '../../service/apirest';

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const saveChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlerLog = () => {
    const url = API_URL + 'login';
    axios.post(url, formData)
      .then((res) => {
      //console.log(res);
      if(res.status === 200){
        localStorage.setItem('token', res.data.token);
        navigate('/api/users')
      }
    })
    .catch((error) => {
      setError(true);
      setErrorMessage(error.message);
    });
  };

  return (
    <>
    <NavBar/>
    <div className='formContainer'>
      <form className='formlogin' onSubmit={handlerSubmit}>
        <h2>Login</h2>
        <input
          className='campo'
          id='email'
          type='email'
          name='email'
          placeholder='Write your email address'
          onChange={saveChanges}
          value={formData.email}
        />
        <input
          className='campo'
          id='pass'
          type='password'
          name='password'
          placeholder='Write your password'
          onChange={saveChanges}
          value={formData.password}
        />
        {error && <span>{errorMessage}</span>}
        <div className='btnContainer'>
          <input
            className='btnLogin'
            type='submit'
            value='Login'
            onClick={handlerLog}
          />
        </div>
        <div className='access'>
          <h3>Or with:</h3>
          <LoginGoogle />
          <LoginTwitter />
          <LoginFacebook />
        </div>
      </form>
    </div>
    </>
  );
};
