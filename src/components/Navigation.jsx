import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div className="container">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink to="/" className="nav-link">Quizzes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/new-quiz" className="nav-link">New Quiz</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
