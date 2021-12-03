import React, { useState, useEffect, useContext } from "react";
import "./Notes.scss";
import Header from "../../components/Header/Header";
import NotesList from "../../components/NotesList/NotesList";
import Search from "../../components/Search/Search";
import { getUserNotes } from "../../services/notes.service";
import saveNote from "../../api/saveNote";
import removeNote from "../../api/removeNote";
import { UserContext } from "../../context/UserProvider";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [userId, setUserId] = useState("");

  const userContext = useContext(UserContext);

  const getAllNotes = async (uid) => {
    try {
      const notes = await getUserNotes(uid);
      setNotes(notes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUserId(userContext.user.uid);
    getAllNotes(userContext.user.uid);
  }, []);

  useEffect(() => {
    getAllNotes(userId);
    setIsSubmitted(false);
  }, [isSubmitted]);

  const addNote = (content) => {
    const newNote = {
      uid: userId,
      name: "new note",
      content: content,
    };
    saveNote(newNote);
    setIsSubmitted(true);
  };

  const deleteNote = (id) => {
    removeNote(id);
    setIsSubmitted(true);
  };

  return (
    <div className="noted">
        <Header  />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.content.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
    </div>
  );
};

export default Home;
