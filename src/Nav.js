import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); // Initialize with the 'home' link as active

  // Function to toggle the theme
  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    document.getElementById('theme-button').classList.toggle('bx-sun');
    localStorage.setItem(
      'selected-theme',
      document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    );
    localStorage.setItem(
      'selected-icon',
      document.getElementById('theme-button').classList.contains('bx-sun') ? 'bx-moon' : 'bx-sun'
    );
  };

  // Function to close the menu
  const closeMenu = () => {
    document.getElementById('nav-menu').classList.remove('show-menu');
  };

  useEffect(() => {
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'bx-sun';

    // Previously selected theme (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // Set the initial theme based on the saved preference
    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
    }

    // Event listener for opening the menu
    const openMenu = () => {
      document.getElementById('nav-menu').classList.add('show-menu');
    };

    // Attach the event listeners
    if (navToggle) {
      navToggle.addEventListener('click', openMenu);
    }
    if (navClose) {
      navClose.addEventListener('click', closeMenu);
    }
    if (themeButton) {
      themeButton.addEventListener('click', toggleTheme);
    }

    // Cleanup by removing the event listeners when the component unmounts
    return () => {
      if (navToggle) {
        navToggle.removeEventListener('click', openMenu);
      }
      if (navClose) {
        navClose.removeEventListener('click', closeMenu);
      }
      if (themeButton) {
        themeButton.removeEventListener('click', toggleTheme);
      }
    };
  }, []);

  useEffect(() => {
    /*==================== CHANGE BACKGROUND HEADER ====================*/
    function scrollHeader() {
      const nav = document.getElementById('header');
      // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
      if (window.scrollY >= 200) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }

    window.addEventListener('scroll', scrollHeader);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  // Function to handle click on navbar links
  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu(); // Close the menu on each link click
  };

  return (
    <div>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#home" className="nav_logo">
            PJ
          </a>

          {/* navbar section */}
          <div className="nav_menu" id="nav-menu">
            <ul className="nav_list grid">
              <li className="nav_item">
                <a
                  href="#home"
                  className={`nav_link ${activeLink === 'home' ? 'active-link' : ''}`}
                  onClick={() => handleLinkClick('home')}
                >
                  <i className="bx bx-home-alt nav_icon"></i> Home
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#about"
                  className={`nav_link ${activeLink === 'about' ? 'active-link' : ''}`}
                  onClick={() => handleLinkClick('about')}
                >
                  <i className="bx bx-user nav_icon"></i> About
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#skills"
                  className={`nav_link ${activeLink === 'skills' ? 'active-link' : ''}`}
                  onClick={() => handleLinkClick('skills')}
                >
                  <i className="bx bx-file nav_icon"></i> Skills
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#qualification"
                  className={`nav_link ${activeLink === 'qualification' ? 'active-link' : ''}`}
                  onClick={() => handleLinkClick('qualification')}
                >
                  <i className="bx bx-file nav_icon"></i> Qualification
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#services"
                  className={`nav_link ${activeLink === 'services' ? 'active-link' : ''}`}
                  onClick={() => handleLinkClick('services')}
                >
                  <i className="bx bx-briefcase-alt-2 nav_icon"></i> Services
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#portfolio"
                  className={`nav_link ${activeLink === 'portfolio' ? 'active-link' : ''}`}
                  onClick={() => handleLinkClick('portfolio')}
                >
                  <i className="bx bx-image nav_icon"></i> Portfolio
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#contact"
                  className={`nav_link ${activeLink === 'contact' ? 'active-link' : ''}`}
                  onClick={() => handleLinkClick('contact')}
                >
                  <i className="bx bx-message-rounded-dots nav_icon"></i> Contact Me
                </a>
              </li>
            </ul>
            <i className="bx bx-x nav_close" id="nav-close"></i>
          </div>
          {/* end of navbar */}
          <div className="nav_btns">
            {/* Toggle theme button */}
            <i className="bx bx-moon change-theme" id="theme-button"></i>
            <div className="nav_toggle" id="nav-toggle">
              <i className="bx bx-menu-alt-left"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
