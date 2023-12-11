import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './components/Login/Login';
import { Users } from './components/Users/Users';
import { UserInfo } from './components/UserInfo/UserInfo';
import { NewUser } from './components/NewUser/NewUser';
import { PatchUser } from './components/PatchUser/PatchUser';
import { NotFound } from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/api/users" element={<Users/>} />
        <Route path="/api/newusers" element={<NewUser/>} /> //crear usuario
        <Route path="/api/users/:uid" element={<UserInfo/>} /> //obtener usuario por ID
        <Route path="/api/users/:uid" element={<PatchUser/>} /> //editar usuario
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
