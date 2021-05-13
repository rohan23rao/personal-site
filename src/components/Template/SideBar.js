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
        <h2>Rohan Rao</h2>
        <p><a href="mailto:rohan23rao@gmail.com">rohan23rao@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Rohan. I a high school student in the Silicon Valley.
        I am a <a href="https://sfhs.com/">Saint Francis High School</a> Student.
        I am very interested Computer Science, Machine Learning, and Music.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Rohan Rao <Link to="/">rohanrao.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
