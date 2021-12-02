import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../containers/Home/Home';
import LoginRegister from '../containers/LoginRegister/LoginRegister';
import Notes from '../containers/Notes/Notes';
import UserProvider from '../context/UserProvider';
import PrivateRoute from './PrivateRoute';
import NotFound from '../components/NotFound/NotFound';


const Router = () => {
  
  return (
    <UserProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/login' element={<LoginRegister />} />
        <Route path='/register' element={<LoginRegister />} />
        <Route path="/notes" element={<PrivateRoute ><Notes /></PrivateRoute>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  )
}

export default Router;
