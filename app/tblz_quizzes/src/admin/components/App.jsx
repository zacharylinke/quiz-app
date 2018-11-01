import React from 'react';
import FormNavContainer from '../containers/FormNavContainer';
import FormContainer from '../containers/FormContainer';

export default class App extends React.Component {
  render() {
    return (
      <div className="quiz-admin-box">
        <FormNavContainer />
        <FormContainer />
      </div>
    );
  }
}
