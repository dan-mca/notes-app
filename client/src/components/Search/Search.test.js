import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from './Search';

describe("Search tests", () => {

  it("should render component", () => {
    expect(render(<Search />)).toBeTruthy();
  })

  it("should render search icon", () => {
    render(<Search />);
    const searchIcon = screen.getByTitle('search');
    expect(searchIcon).toBeInTheDocument();
  })

})