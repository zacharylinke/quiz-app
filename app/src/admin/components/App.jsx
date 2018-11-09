import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation';
import FormNavContainer from '../containers/FormNavContainer';
import FormContainer from '../containers/FormContainer';
import QuizTitleContainer from '../containers/QuizTitleContainer';


const Quizzes = () => (
  <div>
    <p>Quizzes</p>
  </div>
);

const QuizAdminInit = () => (
  <div>
    <QuizTitleContainer />
    <div className="quiz-admin-box">
      <FormNavContainer />
      <FormContainer />
    </div>
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
          <div className="container">
            <Switch>
              <Route path="/" component={ Quizzes } exact />
              <Route path="/new-quiz" component={ QuizAdminInit } />
              <Route component={ NotFound } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
