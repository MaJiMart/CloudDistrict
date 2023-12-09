import { useState } from 'react';
import { LoginFacebook } from '../Access/LoginFacebook';
import { LoginGoogle } from '../Access/LoginGoogle';
import { LoginTwitter } from '../Access/LoginTwitter';

export const Login = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    });
  
  const saveChanges = async (e) => {
    await setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
    console.log(formData);
  }

  const handlerLog = () =>{
    console.log('login');
  }

  return (
    <div className='formContainer'>
      <form className='formlogin' onSubmit={handlerSubmit}>
        <h2>Login</h2>
        <input
          className='campo'
          id='login'
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
        <div className='btnContainer'>
          <input 
          className='btnLogin'
          type='submit'
          value='Login'
          onClick={handlerLog}/>
        </div>
        <div className='access'>
          <h3>Or with:</h3>
          <LoginGoogle />
          <LoginTwitter />
          <LoginFacebook />
        </div>
      </form>
    </div>
  );
};
