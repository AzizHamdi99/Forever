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
import { Toaster } from 'react-hot-toast';
import { useAdminStore } from './stores/useAdminStore';
import { useEffect } from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const location = useLocation();
 const{products,getProducts}=useAdminStore()
    useEffect(()=>{
  getProducts()

    },[getProducts])
    //console.log(products)

  
  const isAdminPage = location.pathname === '/admin';

  return (
    <div>
      
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/collection' element={<Collections />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/product/:id' element={<Details />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>

      
      {!isAdminPage && <Footer />}
      <Toaster
        position="top-right"/>
    </div>
  );
}

export default App;
