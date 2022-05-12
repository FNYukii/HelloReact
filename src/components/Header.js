import '../styles/header.css';

function Header(props) {

  function navItemClassName(index) {
    if (props.index === index) {
      return 'currentNavItem'
    }
    return ''
  }

  return (
    <header>
      <span className='logo'>ReactFire</span>
      <ul>
        <li><a className={navItemClassName(0)} href='/'>Read</a></li>
        <li><a className={navItemClassName(1)} href='/read-realtime'>Read Realtime</a></li>
        <li><a className={navItemClassName(2)} href='/create'>Create</a></li>
        <li><a className={navItemClassName(3)} href='/update'>Update</a></li>
        <li><a className={navItemClassName(4)} href='/delete'>Delete</a></li>
      </ul>
    </header>
  )
}

export default Header;