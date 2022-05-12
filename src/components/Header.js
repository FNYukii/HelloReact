import '../styles/header.css';
import { NavLink } from 'react-router-dom'

function Header() {

  return (
    <header>
      <a href='/' className='logo'>React Fire</a>
      <ul>
        <li><NavLink to="/" activeClassName='active' exact={true}>Read</NavLink></li>
        <li><NavLink to="/read-realtime" activeClassName='active'>Read Realtime</NavLink></li>
        <li><NavLink to="/create" activeClassName='active'>Create</NavLink></li>
        <li><NavLink to="/update" activeClassName='active'>Update</NavLink></li>
        <li><NavLink to="/delete" activeClassName='active'>Delete</NavLink></li>
      </ul>
    </header>
  )
}

export default Header;