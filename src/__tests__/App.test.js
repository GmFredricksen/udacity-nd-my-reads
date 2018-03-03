import React from 'react';
import renderer from 'react-test-renderer';
import App from 'my-reads/src/components/App';

describe('Snapshot | App', () => {
  it('App component renders correctly', () => {
    expect.assertions(1);

    const appComponent = renderer
      .create(<App />)
      .toJSON();

    expect(appComponent).toMatchSnapshot();
  });
});
