import "./Navbar.css";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>CANAAN</h1>
          <p>Career Information Centre</p>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${menuOpen ? "active" : ""}`}></span>
        </button>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="nav-link"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => handleNavClick("about")}
            className="nav-link"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => handleNavClick("services")}
            className="nav-link"
          >
            Courses
          </a>
          <a
            href="#partners"
            onClick={() => handleNavClick("partners")}
            className="nav-link"
          >
            Colleges
          </a>
          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className="nav-link"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
