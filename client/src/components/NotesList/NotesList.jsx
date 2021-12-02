import React from "react";
import AddNote from "../AddNote/AddNote";
import Note from "../Note/Note";
import "./NotesList.scss";

const NotesList = (props) => {
  const { notes, handleAddNote, handleDeleteNote } = props;
  
  const notesSorted = [...notes].sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt))

  return (
    <main className="notes">
      <section className="notes__list">
        <AddNote handleAddNote={handleAddNote} />
        {notesSorted.map((note) => (
          <Note
            key={note._id}
            id={note._id}
            content={note.content}
            date={note.updatedAt}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </section>
    </main>
  );
};

export default NotesList;
