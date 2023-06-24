import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './pages/home';
import Map from './pages/map';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/map' element={<Map/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
