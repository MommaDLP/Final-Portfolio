import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {

  const currentPage = useLocation().pathname;

  return (
    <div>
        <ul className='nav nav-tabs bg-nav'>
            <li className='nav-link'>
                <Link to="/" className={currentPage === '/' ? 'nav-link-active' : 'nav-link'} >
                About Me
                </Link>
            </li>
            <li className='nav-link'>
                <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link-active' : 'nav-link'} >
                Portfolio
                </Link>
            </li>
            <li className='nav-link'>
                <Link to="/contact" className={currentPage === '/contact' ? 'nav-link-active' : 'nav-link'} >
                Contact
                </Link>
            </li>
            <li className='nav-link'>
                <Link to="/resume" className={currentPage === '/resume' ? 'nav-link-active' : 'nav-link'} >
                Resume
                </Link>
            </li>
        </ul>
    </div>
  );
};

export default Navbar;