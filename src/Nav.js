import React, { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    // Event listener for opening the menu
    const openMenu = () => {
      navMenu.classList.add('show-menu');
    };

    // Event listener for closing the menu
    const closeMenu = () => {
      navMenu.classList.remove('show-menu');
    };

    // Attach the event listeners
    if (navToggle) {
      navToggle.addEventListener('click', openMenu);
    }
    if (navClose) {
      navClose.addEventListener('click', closeMenu);
    }

    // Cleanup by removing the event listeners when the component unmounts
    return () => {
      if (navToggle) {
        navToggle.removeEventListener('click', openMenu);
      }
      if (navClose) {
        navClose.removeEventListener('click', closeMenu);
      }
    };
  }, []);

  return (
    <div>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">PJ</a>

          <div className="nav_menu" id="nav-menu">
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link active-link">
                  <i className='bx bx-home-alt nav_icon'></i> Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className='bx bx-user nav_icon'></i> About
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <i className='bx bx-file nav_icon'></i> Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#Qualification" className="nav_link">
                  <i className='bx bx-file nav_icon'></i>Qualification 
                </a>
              </li>
              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <i className='bx bx-briefcase-alt-2 nav_icon'></i> Services
                </a>
              </li>
              <li className="nav_item">
                <a href="#portfolio" portfolio className="nav_link">
                  <i className='bx bx-image nav_icon'></i> Portfolio
                </a>  
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className='bx bx-message-rounded-dots nav_icon'></i> Contact Me
                </a>
              </li>
            </ul>
            <i className='bx bx-x nav_close' id="nav-close"></i>
          </div>
          <div className="nav_btns">
            {/* These change button from light mood to dark mood*/}
            <i className='bx bx-moon change-theme' id="theme-button"></i>
            <div className="nav_toggle" id="nav-toggle">
              <i className='bx bx-menu-alt-left'></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
