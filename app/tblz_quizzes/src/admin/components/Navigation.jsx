import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div>
    <NavLink to="/">Quizzes</NavLink>
    <NavLink to="/new-quiz">New Quiz</NavLink>
  </div>
);

export default Navigation;
