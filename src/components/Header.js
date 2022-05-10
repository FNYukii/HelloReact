import '../styles/header.css';

function Header() {
  return (
    <header>
      <span className='logo'>ReactFire</span>
      <ul>
        <li><a href='/'>Read</a></li>
        <li><a href='/'>Create</a></li>
        <li><a href='/'>Update</a></li>
        <li><a href='/'>Delete</a></li>
      </ul>
    </header>
  )
}

export default Header;