import '../styles/header.css';
import { NavLink } from 'react-router-dom'
import { BsBoxArrowUpRight } from 'react-icons/bs'

function Header() {

  return (
    <header>
      <div className='large-container'>
        <a href='/' className='logo'>React Fire</a>

        <ul className='global-nav'>
          <li><NavLink to="/" activeclassname='active' exact='true'>Read</NavLink></li>
          <li><NavLink to="/read-realtime" activeclassname='active'>Read Realtime</NavLink></li>
          <li><NavLink to="/create" activeclassname='active'>Create</NavLink></li>
          <li><NavLink to="/update" activeclassname='active'>Update</NavLink></li>
          <li><NavLink to="/delete" activeclassname='active'>Delete</NavLink></li>
          <li><a href='https://console.firebase.google.com/u/0/project/reactfire-b8b73/firestore'>Console <BsBoxArrowUpRight/></a></li>
        </ul>
        
      </div>
    </header>
  )
}

export default Header;