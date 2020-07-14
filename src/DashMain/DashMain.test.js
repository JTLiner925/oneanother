import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import DashMain from './DashMain';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <DashMain groups={[]}users={[]}/>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});