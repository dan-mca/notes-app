import React, {useState} from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  const { data } = props;
  const [formData, setFormData] = useState({email: '', password: ''})

  const handleChange = (e) => {
    if(e.target.name === 'email') setFormData({...formData, email: e.target.value});
    if(e.target.name === 'password') setFormData({...formData, password: e.target.value}); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    data(formData);
  }

  return (
    
      <section className="login-register__right">
        <h2 className="login-register__title">Welcome back</h2>
          <p className="login-register__paragraph">Enter the details you signed up with to login</p>
        <form className="form form-login" >
          
          <div className="form-group">
            <label id="email-label" className="form-group__label">Email address</label>
            <input name="email" type="email" className="form-group__input" placeholder="Enter email address" aria-labelledby="email-label" onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label id="password-label" className="form-group__label">Password</label>
            <input name="password" type="password" className="form-group__input" placeholder="Enter password" aria-labelledby="password-label" onChange={handleChange} />
          </div>
          <div>
            <a href="/">Forgot password?</a>
          </div>
          <button type="submit" className="button button__orange-fill" onClick={handleSubmit}>Login</button>
          <p className="form-mobile">Don't have an account? <Link to="/register">Create account</Link></p> 
        </form>
      </section>
  )
}

export default LoginForm;
