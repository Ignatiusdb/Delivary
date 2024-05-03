import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/navBar/navBar';
import Home from './Pages/home/home';
import Cart from './Pages/cart/cart';
import PlaceHolder from './Pages/placeHolder/placeHolder';
import Footer from './Components/footer/footer';
import LoginPop from './Components/loginPop/loginPop';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPop  setShowLogin={setShowLogin} /> : null} 
      <div className='app'>
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeOrder' element={<PlaceHolder />} /> {/* Corrected component name */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
