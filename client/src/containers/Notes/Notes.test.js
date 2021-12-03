import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notes from './Notes';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from "../../context/UserProvider";

describe("Notes tests", () => {

  
  it("should render component", () => {
    const user = { user: {uid: "abc0001"}};
    expect(render(
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Notes />
        </BrowserRouter>
      </UserContext.Provider>
    )).toBeTruthy();
    
  })
  
})