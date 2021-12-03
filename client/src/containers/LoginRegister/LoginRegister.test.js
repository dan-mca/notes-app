import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginRegister from './LoginRegister';
import { BrowserRouter} from 'react-router-dom';

describe("LoginRegister tests", () => {

  const component = <BrowserRouter><LoginRegister /></BrowserRouter>
  
  it("should render component", () => {
    expect(render(component)).toBeTruthy();
  })
  
})