import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Users from './components/users/Users';
import HeaderNSidebar from './components/_layouts/HeaderNSidebar';

function App() {
  return (
    <>
      <HeaderNSidebar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/users' element={<Users/>} />
        </Routes>
      </BrowserRouter>
        
    </>
  );
}

export default App;
