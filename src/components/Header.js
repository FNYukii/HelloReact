import '../styles/header.css';

function Header() {
  return (
    <header>
      <span className='logo'>ReactFire</span>
      <ul>
        <li><a href='/'>Read</a></li>
        <li><a href='/read-realtime'>Read Realtime</a></li>
        <li><a href='/create'>Create</a></li>
        <li><a href='/update'>Update</a></li>
        <li><a href='/delete'>Delete</a></li>
      </ul>
    </header>
  )
}

export default Header;