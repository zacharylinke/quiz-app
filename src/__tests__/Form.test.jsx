import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import FormContainer from '../containers/FormContainer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';


describe('FormContainer', () => {
  const initialState = {
    currentForm: { id: 1, formType: 'question' },
    questions:[{
      id: 1,
      text: 'intitled',
      answers: [
        { id: 1, text: 'Answer 1' },
        { id: 2, text: 'Answer 2' }
      ],
    }],
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = mount( <Provider store={store}><FormContainer /></Provider> );
  })

    it('renders without crashing', () => {
      expect(wrapper.find(FormContainer).length).toEqual(1);
    });
});
