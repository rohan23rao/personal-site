import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Rohan Rao's personal website. High School Student trying to major in CS."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            This is my personal site created with ReactJS.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
        Official Resume <a href="https://drive.google.com/file/d/1Wzmk6eETueGN7TevtYcdF0WaDKyrLGvp/view?usp=sharing">here</a>.
      </p>
      <p> Source available <a href="https://github.com/rohan23rao/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
