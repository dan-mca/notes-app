import React from 'react';
import './Note.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';

const Note = (props) => {
  const { id, content, date, handleDeleteNote } = props;

  const dateFormat = (date) => {
    const today = moment().format('YYYY-MM-DD')
    const noteDate = moment(date).format('YYYY-MM-DD')
    return noteDate === today ? "Today at " + moment(date).format('HH:mm') : moment(date).format("Do MMM 'YY");
  }
  

  return (
    <div className='note'>
      <p className='note__content'>{content}</p>
      <div className='note__footer'>
        <small>{dateFormat(date)}</small>
        <FontAwesomeIcon icon={faTrashAlt} title="delete" onClick={() => handleDeleteNote(id)} className='delete'/>
      </div>
    </div>
  )
}

export default Note;
