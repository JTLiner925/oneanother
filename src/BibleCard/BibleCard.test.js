import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import BibleCard from './BibleCard';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <BibleCard />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});