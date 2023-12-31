import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './pages/home';
import Map from './pages/map';
import Error from './pages/error';
import Signin from './pages/signIn';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/map' element={<Map/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
