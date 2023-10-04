import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../components/Rockets';

const mockStore = configureStore([]);

describe('Rocket Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: '1',
            name: 'Sample Rocket',
            description: 'This is a sample rocket',
            flickr_images: ['image1.jpg', 'image2.jpg'],
            reserved: false,
          },
        ],
        status: 'idle',
        error: null,
      },
    });
  });

  it('renders without errors', () => {
    const component = create( 
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
