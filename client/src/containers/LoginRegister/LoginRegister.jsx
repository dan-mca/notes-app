import React, { useContext, useEffect, useState } from 'react';
import './LoginRegister.scss';
import { signIn, signUp } from '../../services/auth.service';
import { UserContext } from '../../context/UserProvider';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import Header from '../../components/Header/Header';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const LoginRegister = () => {
  const [pageText, setPageText] = useState({
    title: 'Create an account',
    paragraph: 'Sign up now to get started',
    button: 'Create account',
    path: '/register'
  })
  const userContext = useContext(UserContext);
  
  const navigate = useNavigate();
  let location = useLocation()
  let { from } = location.state || { from: { pathname: "/notes" } }

  const userLoggedIn = () => userContext.isLoggedIn && navigate('/notes')
  
  const displayText = () => {
    if(location.pathname === '/login') {
      setPageText({
        title: 'Create an account',
        paragraph: 'Don\'t have an account? Sign up now to get started',
        button: 'Create account',
        path: '/register'
      })
    } else if (location.pathname === '/register') {
      setPageText({
        title: 'Welcome back',
        paragraph: 'Already have an account?',
        button: 'Login',
        path: '/login'
      })
    } 
  }

  useEffect(() => {
    userLoggedIn();
  }, [userContext.isLoggedIn])

  useEffect(() => {
    displayText();
  }, [location.pathname])

  const handleLogin = async (data) => {
    await signIn(data.email, data.password)
    userContext.setIsLoggedIn(true);
    return userContext.isLoggedIn ? setTimeout(() => navigate(from), 1000) : navigate(from)
  }

  const handleRegister = async (data) => {
    await signUp(data.email, data.password)
    userContext.setIsLoggedIn(true);
    return userContext.isLoggedIn ? setTimeout(() => navigate(from), 1000) : navigate(from)
  }


  return (
    <div className="login-register">
      <Header />
      <main className="login-register__main">
        <section className="login-register__left">
          <div className="login-register__text-container">
            <h1 className="login-register__title">{pageText.title}</h1>
            <p className="login-register__paragraph">{pageText.paragraph}</p>
            <div className="login-register__buttons">
              <Link to={pageText.path}><button className="button button__green-outline">{pageText.button}</button></Link>
            </div>
          </div>
        </section>
        {location.pathname === '/login' ? <LoginForm data={handleLogin}/> : <RegisterForm registerData={handleRegister} /> }
      </main>
    </div>
  )
}

export default LoginRegister;
