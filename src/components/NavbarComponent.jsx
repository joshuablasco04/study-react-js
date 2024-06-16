import style from './NavbarComponent.module.css'

const NavbarComponent = () => {
  return (
    <>
        <nav className={style.navbar}>
            <div className={style.logo}>
                <h2>LOGO</h2>
            </div>
            <ul className={style['navbar-items']}>
                <li>
                    <a href="">Home</a> 
                </li>
                <li>
                    <a href="">Contact</a> 
                </li>
                <li>
                    <a href="">About</a> 
                </li>
                
            </ul>
        </nav>
    </>
  )
}

export default NavbarComponent