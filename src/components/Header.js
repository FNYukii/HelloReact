import '../styles/header.css';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Header() {

  return (
    <header>
      <div className='large-container'>
        <a href='/' className='logo'>Hello React</a>

        <FaBars className='bars'/>

        <ul className='global-nav'>
          <li><NavLink to="/" activeclassname='active' exact='true'>Read</NavLink></li>
          <li><NavLink to="/read-realtime" activeclassname='active'>Read Realtime</NavLink></li>
          <li><NavLink to="/create" activeclassname='active'>Create</NavLink></li>
        </ul>

      </div>
    </header>
  )
}

export default Header;