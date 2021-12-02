import React, { useState } from 'react';
import './AddNote.scss';

const AddNote = (props) => {
  const { handleAddNote } = props;
  const [noteText, setNoteText] = useState()
  const [isDisabled, setIsDisabled] = useState(true)

  const handleChange = (e) => {
    setNoteText(e.target.value)
    return e.target.value.trim().length > 0 ? setIsDisabled(false) : setIsDisabled(true)
  }

  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
      handleAddNote(noteText);
      setNoteText('');
    }
  }
  
  return (
    <div className="note new">
      <textarea
        rows='6'
        cols='10'
        placeholder='Type to add a new note...'
        value={noteText}
        onChange={handleChange}
        className="note__content"
      ></textarea>
      <div className="note__footer"></div>
      <button className={isDisabled ? 'button button--disabled' : 'button'} onClick={handleSaveClick} disabled={isDisabled} >Save</button>
    </div>
  )
}

export default AddNote
