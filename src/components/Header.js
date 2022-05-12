import '../styles/header.css';
import { NavLink } from 'react-router-dom'

function Header() {

  return (
    <header>
      <a href='/' className='logo'>React Fire</a>
      <ul>
        <li><NavLink to="/" activeclassname='active' exact='true'>Read</NavLink></li>
        <li><NavLink to="/read-realtime" activeclassname='active'>Read Realtime</NavLink></li>
        <li><NavLink to="/create" activeclassname='active'>Create</NavLink></li>
        <li><NavLink to="/update" activeclassname='active'>Update</NavLink></li>
        <li><NavLink to="/delete" activeclassname='active'>Delete</NavLink></li>
      </ul>
    </header>
  )
}

export default Header;