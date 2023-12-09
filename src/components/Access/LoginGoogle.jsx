import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const LoginGoogle = () => {
  return (
    <div className='google'>
      
        <div className='googleIcon'>
        <FontAwesomeIcon icon={faGoogle} />
        </div>
      
    </div>
  )
}
