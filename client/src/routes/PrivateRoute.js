import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from '../context/UserProvider';

/**
 * A wrapper around the element which checks if the user is authenticated
 * If authenticated, renders the passed element
 * If not authenticated, redirects the user to Login page.
 */
const PrivateElement = ({ children }) => {

  const userContext = useContext(UserContext);
  console.log(userContext)

  let location = useLocation()

  return userContext.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  )
}

export default PrivateElement
