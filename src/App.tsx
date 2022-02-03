import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import UserPage from './components/users/UserPage';
import Users from './components/users/Users';
import Navigation from './components/_layouts/Navigation';
import Archives from './components/archive/Archives';
import UserImport from './components/user_import/UserImport';
import Login from './components/auth/Login';
import PrivateRoute from './utils/PrivateRoute';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>  {/* NAVIGATION */}
        <Routes>
          {/* PUBLIC ROUTES */}
        
          {/* PROTEDTED ROUTES */}
          <Route path='/' element={<PrivateRoute component={Dashboard}/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/users' element={<PrivateRoute component={Users}/>} />
          <Route path='/users/page' element={<PrivateRoute component={UserPage}/>} />
          <Route path='/users/import' element={<PrivateRoute component={UserImport}/>} />
          <Route path='/users/archive' element={<PrivateRoute component={Archives}/>} />
          <Route path="*" element={<PageNotFound/>}/>
          {/* Not Protected */}
          {/* <Route path='/' element={<Dashboard/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/users/page' element={<UserPage/>} />
          <Route path='/users/import' element={<UserImport/>} />
          <Route path='/users/archive' element={<Archives/>} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
