import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logo from "../../assets/LOGO.png"

const Header = () => {

    const location = useLocation();
    const {pathname} = location // ==> const pathname = location.pathname

    return (
        <div className="Header">
            <img src={logo}></img>
            <div className='LinkContainer'>
                <Link to='/' className={`link ${pathname === '/' ? 'underline' : ''}`}>Accueil</Link>
                <Link to='/about' className={`link ${pathname === '/about' ? 'underline' : ''}`}>A propos</Link>
            </div>
        </div>
    )
}

export default Header