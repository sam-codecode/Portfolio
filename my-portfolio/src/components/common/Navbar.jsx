import "./Navbar.css"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">Sam.Co</div>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}


