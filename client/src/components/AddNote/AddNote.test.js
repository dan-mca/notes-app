import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddNote from "./AddNote";

describe("AddNote tests", () => {
  
  it("should render the component", () => {
    expect(render(<AddNote />)).toBeTruthy();
  })

  it("should render the default text", () => {
    render(<AddNote />);
    const text = screen.getByRole('textbox', { placeholder: 'Type to add a new note...' });
    expect(text).toBeInTheDocument();
  })

  it("should render the save button as disabled when no text is added", () => {
    render(<AddNote />);
    const button = screen.getByRole('button', { name: 'Save' })
    expect(button).toBeDisabled()
  })

  it("should render the save button as enabled when text is input", () => {
    render(<AddNote />);
    const noteText = "this is a new note"
    const button = screen.getByRole('button', { name: 'Save' })
    const textArea = screen.getByRole('textbox')

    fireEvent.change(textArea, {target: {value: noteText}})
    
    expect(textArea.value).toBe('this is a new note');
    expect(button).not.toBeDisabled()
  })
})
