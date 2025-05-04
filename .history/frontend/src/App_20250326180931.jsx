import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Collections from './pages/Collections';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Details from './pages/Details';
import Admin from './pages/Admin';

function App() {
  const location = useLocation();

  // Conditionally render Navbar and Footer based on the current route
  const isAdminPage = location.pathname === '/admin';

  return (
    <div>
      {/* Render Navbar and Footer only if it's not the Admin page */}
      {!isAdminPage && <Navbar />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/collection' element={<Collections />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/product/:id' element={<Details />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>

      {/* Render Footer only if it's not the Admin page */}
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default App;
