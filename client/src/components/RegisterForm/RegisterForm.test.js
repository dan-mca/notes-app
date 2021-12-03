import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterForm from './RegisterForm';
import { BrowserRouter } from "react-router-dom";

describe("RegisterForm tests", () => {

  it("should render component", () => {
    expect(render(
      <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
    )).toBeTruthy();
  })

  it("should render the correct title, subtitle text", () => {
    render(<BrowserRouter><RegisterForm /></BrowserRouter>);
    const title = screen.getByRole('heading', {name: 'Create account'});
    const subtitle = screen.getByText('Enter your details below to start creating notes');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  })

  it("should render the form labels and inputs", () => {
    render(<BrowserRouter><RegisterForm /></BrowserRouter>)
    const firstName = screen.getByLabelText('First name')
    const lastName = screen.getByLabelText('Last name')
    const emailInput = screen.getByLabelText('Email address')
    const passwordInput = screen.getByLabelText('Password')
    
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  })

  it("should render the create account button", () => {
    render(<BrowserRouter><RegisterForm /></BrowserRouter>);
    const submitButton = screen.getByRole('button', {name: 'Create account'});
    expect(submitButton).toBeInTheDocument();
  })

  it("should render the login text", () => {
    render(<BrowserRouter><RegisterForm /></BrowserRouter>);
    const loginText = screen.getByText('Already have an account?');
    expect(loginText).toBeInTheDocument();

    const loginLink = screen.getByRole('link', {name: 'Login'});
    expect(loginLink).toBeInTheDocument();
  })

})