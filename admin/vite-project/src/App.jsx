import React from 'react'
import NavBar from './components/navbar/navBar'
import SideBar from './components/sideBar/sideBar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/add/add'
import List from './pages/list/list'
import Orders from './pages/orders/orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:3014";

  return (
    <div>
    <ToastContainer/>
    <NavBar/>
      <hr/>
      <div className='app-content'>
      <SideBar/>
      <Routes>
      <Route path='/add' element={<Add url={url} />}/>
      <Route path='/list' element={<List url={url}/>}/>
      <Route path='/orders' element={<Orders url={url}/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
