import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from './Home';
import { Link, BrowserRouter } from 'react-router-dom';

describe("Home tests", () => {

  const component = <BrowserRouter><Home /></BrowserRouter>

  it("should render component", () => {
    expect(render(component)).toBeTruthy();
  })

  it("should render page text", () => {
    render(component);
    const title = screen.getByRole('heading', {name: 'Save all your notes in one place'});
    const subtitle = screen.getByText('Register for an account and starting adding your notes');
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  })

  it("should render get started and login buttons", () => {
    render(component);
    const getStartedButton = screen.getByRole('button', {name: 'Get started'});
    const loginButton = screen.getByRole('button', {name: 'Login'});
    expect(getStartedButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  })

  it("should render image", () => {
    render(component);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  })
})