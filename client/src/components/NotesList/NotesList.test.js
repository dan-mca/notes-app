import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotesList from './NotesList';

describe("NotesList tests", () => {

  const testNotes = [
    {
      content: "Note 1",
      _id: "61a3a2a0b048c3395f1badb0",
      date: "2021-11-28T15:39:12.453Z"
    },
    {
      content: "Note 2",
      _id: "61a6047885a886d847be15af",
      date: "2021-11-30T11:01:12.070Z"
    }
  ]

  it("should render component", () => {
    expect(render(<NotesList notes={[]} />)).toBeTruthy();
  })

  it("should render the save note only when the user has no saved notes", () => {
    render(<NotesList notes={[]} />)
    const saveNoteText = screen.getByRole('textbox', { placeholder: 'Type to add a new note...' });
    expect(saveNoteText).toBeInTheDocument();
  })

  it("should render notes if they are available", () => {
    render(<NotesList notes={testNotes} />);
    const noteOne = screen.getByText('Note 1');
    const noteTwo = screen.getByText("Note 2");

    expect(noteOne).toBeInTheDocument();
    expect(noteTwo).toBeInTheDocument();
  })
})