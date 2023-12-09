import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const LoginTwitter = () => {
  return (
    <div className='twitter'>
      
        <div className='twIcon'>
        <FontAwesomeIcon icon={faXTwitter} />
        </div>
      
    </div>
  )
}
