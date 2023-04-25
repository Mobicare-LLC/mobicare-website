
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<Home />}/>
      <Route path='/about-us' element={<About />}/>
    </Routes>
  );
}

export default App;
