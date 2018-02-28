import React from 'react';
import ReactDOM from 'react-dom';
import App from 'my-reads/src/components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
