import { Link } from 'react-router-dom';
import { ButtonHome } from '../Access/ButtonHome';

export const NewUser = () => {
  return (
    <div className='createUser'>
      <header>
        <img src='/assets/newuser.png' alt='header users image' />
      </header>
      <div className='cardCreate'>
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
          <button className='btnEdit'>Creat</button>
        </div>
      </div>
      <footer>
        <Link to={'/users'}>
          <ButtonHome />
        </Link>
      </footer>
    </div>
  );
};
