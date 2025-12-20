import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = ["home", "features", "how", "pricing", "contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (id) => {
    setActive(id);
    setMenuOpen(false); // close menu on link click
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className={`logo ${scrolled ? "logo-scrolled" : ""}`}>TaskFlow</div>

      {/* Desktop nav links */}
      <ul className="nav-links">
        {["home", "features", "how", "pricing", "contact"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => handleLinkClick(id)}
            >
              {id === "how"
                ? "How It Works"
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile nav links */}
      <ul className={`nav-links-mobile ${menuOpen ? "active" : ""}`}>
        {["home", "features", "how", "pricing", "contact"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => handleLinkClick(id)}
            >
              {id === "how"
                ? "How It Works"
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
