import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Questions from './Questions';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <Questions question={['hello']}/>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
