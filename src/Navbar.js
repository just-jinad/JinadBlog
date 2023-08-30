import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The jinad's blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
                <Link to="/about">About Us</Link>
                <Link to="/questions">FAQs</Link>
            </div>
        </nav>
    );
}

export default Navbar;