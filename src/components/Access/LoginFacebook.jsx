import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

export const LoginFacebook = () => {
  return (
    <div className='facebook'>
      
        <div className='fbIcon'>
        <FontAwesomeIcon icon={faFacebookF} />
        </div>
      
    </div>
  )
}
