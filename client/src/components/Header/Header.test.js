import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { useNavigate, BrowserRouter } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

describe("Header tests", () => {
  it("should render the component", () => {
    expect(
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    ).toBeTruthy();
  });

  it("should render user icon when a user is logged in", () => {
    const user = { isLoggedIn: true };
    render(
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </UserContext.Provider>
    );

    const userIcon = screen.getByTitle("user icon");

    expect(userIcon).toBeInTheDocument();
  });

  it("should not render user icon if a user is not logged in", () => {
    const user = { isLoggedIn: false };
    render(
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </UserContext.Provider>
    );

    const userIcon = screen.queryByTitle("user icon");

    expect(userIcon).toEqual(null);
  });
});
