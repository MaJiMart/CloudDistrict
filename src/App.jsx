import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContextProv } from './context/UserContext';

import { Login } from './components/Login/Login';
import { Users } from './components/Users/Users';
import { UserInfo } from './components/UserInfo/UserInfo';
import { NewUser } from './components/NewUser/NewUser';
import { PatchUser } from './components/PatchUser/PatchUser';
import { NotFound } from './components/NotFound/NotFound';

function App() {
  return (
    <UserContextProv>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/newuser' element={<NewUser/>} />
          <Route path='/user/:uid' element={<UserInfo/>} />
          <Route path='/user/edit/:uid' element={<PatchUser/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </UserContextProv>
  );
}

export default App;
