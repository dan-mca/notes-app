import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

export const UserContext = createContext({});

const UserProvider = (props) => {

  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => (
    !user ? setIsLoggedIn(false) : setIsLoggedIn(true)
  )
   
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    handleLogin()
  },[user])
  

  const data = {
    user: user,
    setUser: setUser,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn, setIsLoggedIn
  }

  return (
   <UserContext.Provider value={data}>
     {props.children}
   </UserContext.Provider>
  )
}

export default UserProvider
