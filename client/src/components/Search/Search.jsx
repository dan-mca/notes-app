import React from 'react';
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
  const {handleSearchNote} = props;

  return (
    <section className='search'>
      <div className="search__container">
        <input type='text' placeholder={'Search notes'} onChange={e => handleSearchNote(e.target.value)} />
        <FontAwesomeIcon title='search' icon={faSearch} />
      </div>
    </section>
  )
}

export default Search;
