import { Link } from "react-router-dom";  // Link is more fast than a

// sfc: stateless functional component
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>This 1s Us</h1>
            <div className="links">
                {/* <a href="/">Home</a> */}
                <Link to="/">Home</Link>
                {/* <a href="/create" style={{
                    backgroundColor: 'white',
                    borderRadius: '8px'
                }}>New Blog</a> */}
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;