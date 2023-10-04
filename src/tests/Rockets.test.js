import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../components/Rockets';

const mockStore = configureStore([]);

describe('Rockets component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          { id: 'falcon1', name: 'Falcon 1' },
          { id: 'falcon9', name: 'Falcon 9' },
          { id: 'falconheavy', name: 'Falcon Heavy' },
        ],
        status: 'succeeded',
        error: null,
      },
    });
  });

  it('should render the rockets', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketElements = screen.getAllByTestId('rocket');
    expect(rocketElements).toHaveLength(3);
  });

  it('should render a loading message when status is loading', () => {
    store = mockStore({
      rockets: {
        rockets: [],
        status: 'loading',
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const loadingElement = screen.getByText(/loading/i);
    expect(loadingElement).toBeInTheDocument();
  });

  it('should render an error message when status is failed', () => {
    store = mockStore({
      rockets: {
        rockets: [],
        status: 'failed',
        error: 'Failed to fetch rockets',
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const errorElement = screen.getByText(/error/i);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('Failed to fetch rockets');
  });
});
