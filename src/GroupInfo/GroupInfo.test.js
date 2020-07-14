import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import GroupInfo from './GroupInfo';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <GroupInfo groups={[]}users={[]}/>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
