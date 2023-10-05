import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Rootul&apos;Patel</h2>
        <p><a href="mailto:rooatwork1@gmail.com">rooatwork1@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Rootul. I am recent graduate from <a href="https://www.conestogac.on.ca/">Conestoga College</a> with specialization in Mobile Application development, <a href="https://www.tcs.com/">Tata Consultancy Services</a> Alumni, <a href="https://www.srmist.edu.in/department/department-of-computer-science/">SRM Institute Of Science and Technology</a> graduate.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Rootul Patel .</p>
    </section>
  </section>
);

export default SideBar;
