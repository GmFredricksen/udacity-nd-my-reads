import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
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

describe('Acceptance | App', () => {
  it('Application routing works as expected', async () => {
    expect.assertions(1);

    const appComponent = mount(<App />);
    const currentLocation = location.href.split('localhost')[1];

    expect(currentLocation).toEqual('/');

    // TODO: find out how to inspect changes in url
    // const addBtn = appComponent.find('.open-search');
    // await addBtn.find('a').simulate('click');
    // currentLocation = location.href.split('localhost')[1];

    // expect(currentLocation).toEqual('/search');
  });
});
