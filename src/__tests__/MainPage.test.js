import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import MainPage from 'my-reads/src/components/MainPage';

describe('Snapshot | MainPage', () => {
  it('MainPage component renders correctly', () => {
    expect.assertions(1);

    const appComponent = renderer
      .create(
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      )
      .toJSON();

    expect(appComponent).toMatchSnapshot();
  });
});
