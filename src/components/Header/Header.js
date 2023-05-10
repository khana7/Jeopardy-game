import React, { useState, useEffect } from 'react';
import './Header.css';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import Hello from '../../components/Hello/Hello'
import Statistics from '../../pages/Statistics/Statistics'
import { useDispatch } from 'react-redux';
import { setPlayerName } from '../../store';

const Header = () => {
  const dispatch = useDispatch();
  const [playerName, setPlayerNameLocal] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    if (name) {
      dispatch(setPlayerName(name));
      setPlayerNameLocal(name);
    }
  }, [location, dispatch]);

  return (
    <>
      <div className='header'>
        <div className='header__wrapper'>
          <nav className='header__title'>
            <NavLink to="/" className='header__link'>
              {playerName ? `WELCOME, ${playerName.toUpperCase()}!` : 'JEOPARDY GAME'}
            </NavLink>
          </nav>
          {playerName ? <Hello playerName={playerName}/>: <Menu />}
        </div>
      </div>
    </>
  )
}

export default Header;
