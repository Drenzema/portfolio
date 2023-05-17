import "../assets/general/Navbar.css"

const NavBar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="nav-item"><a href="#about">about</a></li>
          <li className="nav-item"><a href="#works">works</a></li>
          <li className="nav-item"><a href="#contact">contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
