import React, { useContext } from "react";
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { logOut } from '../../services/auth.service';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserProvider';

const Header = () => {

  const userContext = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut();
    navigate('/');
  };

  return (
    <header className="header">
      <Link to="/"><p className="header__logo">Memo</p></Link>

      { userContext.isLoggedIn &&
        <div className="header__buttons">
          <FontAwesomeIcon 
            className="header__user" 
            icon={faUser} 
            onClick={handleSignOut} 
            aria-label="logout"
            title="user icon"/>
        </div>
      }

    </header>
  );
};

export default Header;
