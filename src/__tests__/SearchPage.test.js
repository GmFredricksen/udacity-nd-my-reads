import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from 'my-reads/src/components/SearchPage';

describe('Snapshot | SearchPage', () => {
  it('SearchPage component renders correctly', () => {
    expect.assertions(1);

    const appComponent = renderer
      .create(
        <MemoryRouter>
          <SearchPage />
        </MemoryRouter>
      )
      .toJSON();

    expect(appComponent).toMatchSnapshot();
  });
});
