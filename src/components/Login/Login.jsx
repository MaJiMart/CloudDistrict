import { NavBar } from '../NavBar/NavBar';
import { ButtonLogin } from '../Access/ButtonLogin';

export const Login = () => {
  return (
    <>
      <NavBar />
      <div className='formContainer'>
        <div className='login'>
          <h2>Pleace login to continue:</h2>
          <div>
            <ButtonLogin />
          </div>
        </div>
      </div>
    </>
  );
};
