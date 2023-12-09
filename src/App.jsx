import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { Login } from './components/Login/Login';
import { PaginatedList } from './components/PaginatedList/PaginatedList';
import { NotFound } from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Login/>} />

        {/* <Route path="/api/users" element={<PaginatedList/>} />

        <Route path="*" element={<NotFound/>} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
