import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserContextProv } from './context/UserContext';
import { Welcome } from './components/Welcome/welcome';
import { Login } from './components/Login/Login';
import { UsersContainer } from './components/UsersContainer/UsersContainer';
import { UserInfo } from './components/UserInfo/UserInfo';
import { NewUser } from './components/NewUser/NewUser';
import { PatchUser } from './components/PatchUser/PatchUser';
import { NotFound } from './components/NotFound/NotFound';

function App() {
  const domain = import.meta.env.VITE_ATH0_DOMAIN;
  const clientId = import.meta.env.VITE_ATH0_CLIENT_ID;


  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <UserContextProv>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/newuser' element={<NewUser />} />
            <Route path='/user/:uid' element={<UserInfo />} />
            <Route path='/user/edit/:uid' element={<PatchUser />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserContextProv>
    </Auth0Provider>
  );
}

export default App;
