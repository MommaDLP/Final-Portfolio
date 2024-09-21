import { Link } from "react-router-dom";
import Navbar from './Nav/Nav';
import '../components/Nav/Nav.css';

export default function Nav() {
    return (
        <Navbar
            links={[
                <Link key={2} className="nav-link" to="/About">
                About Her 
                </Link>,
                <Link key={3} className="nav-link" to="/Portfolio">
                Portfolio
                </Link>,
                <Link key={4} className="nav-link" to="/Contact">
                Contact
                </Link>,
                <Link key={5} className="nav-link" to="/Resume">
                Resume
                </Link>
            ]}
        />
    );
};