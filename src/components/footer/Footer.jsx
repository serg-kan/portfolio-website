import React from 'react';

import { SiInstagram, SiFacebook, SiYoutube, SiLinkedin } from 'react-icons/si';

const Footer = () => {
  return (
    <div>
      <footer className="py-3 bg-dark" id="footer">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <a target="_blank" className="nav-link px-2 text-light" rel="noopener noreferrer" href="https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%BA%D0%B0%D0%BD-53569a138/">
              <SiLinkedin />
            </a>
          </li>
          <li class="nav-item">
            <a target="_blank" className="nav-link px-2 text-light" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCM1UBclX5KG3_ebnUXzgCeg">
              <SiYoutube />
            </a>
          </li>
        </ul>
        <p class="text-center text-muted">&copy; 2021 Sergey Kan</p>
      </footer>
    </div>
  );
};

export default Footer;
