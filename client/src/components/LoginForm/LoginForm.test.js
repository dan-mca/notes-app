import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from './LoginForm';
import { BrowserRouter } from "react-router-dom";

describe("LoginForm tests", () => {

  it("should render the component", () => {
    expect(render(
      <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
    )).toBeTruthy();
  })

  it("should render the correct title, subtitle text", () => {
    render(<BrowserRouter><LoginForm /></BrowserRouter>);
    const title = screen.getByRole('heading', {name: 'Welcome back'});
    const subtitle = screen.getByText('Enter the details you signed up with to login');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  })

  it("should render the form labels and inputs", () => {
    render(<BrowserRouter><LoginForm /></BrowserRouter>)
    const emailInput = screen.getByLabelText('Email address')
    const passwordInput = screen.getByLabelText('Password')
    
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  })

  it("should render the login button", () => {
    render(<BrowserRouter><LoginForm /></BrowserRouter>);
    const submitButton = screen.getByRole('button', {name: 'Login'});
    expect(submitButton).toBeInTheDocument();
  })

  it("should render the create account text", () => {
    render(<BrowserRouter><LoginForm /></BrowserRouter>);
    const noAccountText = screen.getByText('Don\'t have an account?');
    expect(noAccountText).toBeInTheDocument();

    const createAccountLink = screen.getByRole('link', {name: 'Create account'});
    expect(createAccountLink).toBeInTheDocument();
  })
})