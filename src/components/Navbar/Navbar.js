import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { link: '/', name: 'Home' },
    { link: '/highscores', name: 'HighScores' },
  ];

  let htmlLinks = [];
  if (Array.isArray(links) && links.length) {
    htmlLinks = links.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={`li-${index}`}>
        <Link to={item.link} className="nav-link">{item.name}</Link>
      </li>
    ));
  }

  return (
    <nav>
      <div>
        <Link to="/">
          Learn.Build.
          <span>Type.</span>
        </Link>
      </div>
      <ul>{htmlLinks}</ul>
    </nav>
  );
};

export default Navbar;
