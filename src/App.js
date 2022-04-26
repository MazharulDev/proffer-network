import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import Blogs from './components/pages/Blogs/Blogs';
import Donation from './components/pages/Donation/Donation';
import Events from './components/pages/Events/Events';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/donation' element={<Donation />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
