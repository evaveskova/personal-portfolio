import React from 'react';

const Navbar = ({ references }) => {
  const handleClick = e => {
    references[e.target.name].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul>
          <li><a onClick={handleClick} name="projects">Projects</a></li>
          <li><a onClick={handleClick} name="contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
