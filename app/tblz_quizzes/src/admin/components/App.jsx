import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation';
import FormNavContainer from '../containers/FormNavContainer';
import FormContainer from '../containers/FormContainer';


const Quizzes = () => (
  <div>
    <p>Quizzes</p>
  </div>
);

const QuizAdminInit = () => (
  <div className="quiz-admin-box">
    <FormNavContainer />
    <FormContainer />
  </div>
);

const NotFound = () => (
  <div>
    <p>Page Not Found</p>
  </div>
);

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={ Quizzes } exact />
            <Route path="/new-quiz" component={ QuizAdminInit } />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
