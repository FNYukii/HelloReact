import '../styles/header.css';
import { NavLink } from 'react-router-dom';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';

function Header() {

  return (
    <header>
      <div className='large-container'>
        <a href='/' className='logo'>React Fire</a>

        <FaBars className='bars'/>

        <ul className='global-nav'>
          <li><NavLink to="/" activeclassname='active' exact='true'>Read</NavLink></li>
          <li><NavLink to="/read-realtime" activeclassname='active'>Read Realtime</NavLink></li>
          <li><NavLink to="/create" activeclassname='active'>Create</NavLink></li>
          <li><a href='https://console.firebase.google.com/u/0/project/reactfire-b8b73/firestore' target="blank">Console <BsBoxArrowUpRight/></a></li>
        </ul>

      </div>
    </header>
  )
}

export default Header;