import { type FC, useState } from 'react';
import './Navbar.css';

const Navbar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjusted for the fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsSidebarOpen(false); // Close sidebar after clicking
    }
  };

  const navItems = [
    { label: 'Home', id: 'Home' },
    { label: 'About', id: 'About' },
    { label: 'Skills', id: 'Skills' },
    { label: 'Projects', id: 'Projects' },
    { label: 'Contact', id: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger Icon */}
        <div className={`hamburger ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="navbar-logo" onClick={() => scrollToSection('Home')}>
          AMAL V R
        </div>

        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
