import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import UserPage from './components/users/UserPage';
import Users from './components/users/Users';
import HeaderNSidebar from './components/_layouts/HeaderNSidebar';
import Archives from './components/archive/Archives';
import UserImport from './components/users/UserImport';

function App() {
  return (
    <>
      <HeaderNSidebar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/users/page' element={<UserPage/>} />
          <Route path='/users/import' element={<UserImport/>} />
          <Route path='/users/archive' element={<Archives/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
