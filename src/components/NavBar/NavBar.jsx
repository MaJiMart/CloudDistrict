import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to='https://clouddistrict.com/'>
        <div className='logo'>
          <img src='/assets/cloud.png' alt='logo Cloud District' />
        </div>
      </Link>
    </div>
  );
};
