import './App.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
import { useUserStore } from './stores/useUserStore';
import {Loader }from'lucide-react'
import Delivery from './pages/Delivery';

function App() {
  const location = useLocation();
 const{products,getProducts}=useAdminStore()
 const {user,chekingAuth,isChekingAuth}=useUserStore()
    useEffect(()=>{
  getProducts()

    },[getProducts])
    

    useEffect(()=>{
chekingAuth()
    },[chekingAuth])
    if( isChekingAuth&&!user){
      return(
        <div className='flex  items-center justify-center h-screen'>
          <Loader className="size-10 animate-spin "/>
    
        </div>
    
      )
     }

  
  const isAdminPage = location.pathname === '/admin';

  return (
    <div>
      
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/collection' element={<Collections />} />
        <Route path='/cart' element={user?<Cart />:<Navigate to="/login"/>} />
        <Route path='/orders' element={user?<Orders />:<Navigate to="/login"/>} />
        <Route path='/delivery' element={user?<Delivery />:<Navigate to="/login"/>} />
        <Route path='/product/:id' element={<Details />} />
        <Route path='/admin' element={user?.role==="admin"?<Admin />:<Navigate to="/"/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>

      
      {!isAdminPage && <Footer />}
      <Toaster
        position="top-right" />
        

    </div>
  );
}

export default App;
