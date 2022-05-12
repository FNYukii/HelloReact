import '../styles/header.css';
import { NavLink } from 'react-router-dom'

function Header() {

  return (
    <header>
      <span className='logo'>ReactFire</span>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Read</NavLink></li>
        <li><NavLink to="/read-realtime" className={({ isActive }) => (isActive ? 'active' : '')}>Read Realtime</NavLink></li>
        <li><NavLink to="/create" className={({ isActive }) => (isActive ? 'active' : '')}>Create</NavLink></li>
        <li><NavLink to="/update" className={({ isActive }) => (isActive ? 'active' : '')}>Update</NavLink></li>
        <li><NavLink to="/delete" className={({ isActive }) => (isActive ? 'active' : '')}>Delete</NavLink></li>
      </ul>
    </header>
  )
}

export default Header;