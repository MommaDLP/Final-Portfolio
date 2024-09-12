import { Link } from 'react-router-dom';
import Navbar from './components/Nav';

export default function Nav() {
    return (
        <Navbar
            links={[
                <Link key={1} className="" to="/">
                    About Me
                </Link>,
                <Link key={2} className="" to="/projects">
                    Portfolio
                </Link>,
                <Link key={3} className="" to="/contact">
                    Contact
                </Link>,
                <Link key={4} className="" to="/resume" >
                    Resume
                </Link>,
            ]}
        />
    );
}