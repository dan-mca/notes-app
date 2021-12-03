import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Note from './Note';
import moment from 'moment';

describe("Note tests", () => {
    const component = <Note id="abc000123" content="This is test note text" date={new Date()}/>;
    it("should render component", () => {
      expect(render(component)).toBeTruthy();
    })
  
    it("should render the correct note content based in props passed", () => {
      render(component);
      const noteText = screen.getByText("This is test note text");
      expect(noteText).toBeInTheDocument();
    })
  
    it("should render the date text in the correct format when date is today", () => {
      render(component);
      const date = new Date();
      const time = moment(date).format('HH:mm');
      
      const noteDate = screen.getByText(`Today at ${time}`);
      expect(noteDate).toBeInTheDocument()
    })

    it("should render the date text in the correct format when date is not today", () => {
      render(<Note id="abc000123" content="This is test note text" date={'2021-10-10'}/>);
      
      const noteDate = screen.getByText("10th Oct '21");
      expect(noteDate).toBeInTheDocument()
    })
  
    it("should render delete button", () => {
      render(component);
      const deleteIcon = screen.getByTitle("delete");
      expect(deleteIcon).toBeInTheDocument();
    })
  
})
