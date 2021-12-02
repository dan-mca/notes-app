import React, { useState } from 'react';
import './RegisterForm.scss';
import { Link } from 'react-router-dom';

const RegisterForm = (props) => {;
  const { registerData } = props;
  const [formData, setFormData] = useState({email: '', password: ''})

  const handleChange = (e) => {
    if(e.target.name === 'firstName') setFormData({...formData, firstName: e.target.value});
    if(e.target.name === 'lastName') setFormData({...formData, lastName: e.target.value});
    if(e.target.name === 'email') setFormData({...formData, email: e.target.value});
    if(e.target.name === 'password') setFormData({...formData, password: e.target.value}); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    registerData(formData);
  }


  return (
    
      <section className="login-register__right">
        <h2 className="login-register__title">Create account</h2>
          <p className="login-register__paragraph">Enter your details below to start creating notes</p>
        <form className="form form-register" >
          <div className="form-group">
            <label htmlFor="firstName" className="form-group__label">First name</label>
            <input name="firstName" type="firstName" className="form-group__input" placeholder="Enter first name" onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-group__label">Last name</label>
            <input name="lastName" type="lastName" className="form-group__input" placeholder="Enter last name" onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-group__label">Email address</label>
            <input name="email" type="email" className="form-group__input" placeholder="Enter email address" onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-group__label">Password</label>
            <input name="password" type="password" className="form-group__input" placeholder="Enter password"onChange={handleChange} />
          </div>
          <button type="submit" className="button button__orange-fill" onClick={handleSubmit}>Create account</button>
          <p className="form-mobile">Already have an account? <Link to="/login">Login</Link></p>  
        </form>
      </section>
  )
}

export default RegisterForm;
