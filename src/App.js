
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<Home />}/>
      <Route path='/about-us' element={<About />}/>
      <Route path='/contact-us' element={<Contact />}/>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
