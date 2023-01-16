import React from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Blog from '../blog/Blog';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="header">
      <ul className="header_links">
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/youtube">YouTube</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
    
  )
}

export default Navbar;