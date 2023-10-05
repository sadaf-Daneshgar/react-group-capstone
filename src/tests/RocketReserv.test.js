import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import RocketReserv from '../components/RocketReserv';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const mockReservedRockets = [
  { id: 1, name: 'Falcon 9', reserved: true },
  { id: 2, name: 'Starship', reserved: true },
];

describe('RocketReserv component', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      rockets: {
        rockets: mockReservedRockets,
      },
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('renders reserved rockets correctly', () => {
    const { getByText } = render(<RocketReserv />);

    // Check if the component title is rendered
    expect(getByText('My Rockets')).toBeInTheDocument();

    // Check if the reserved rocket names are rendered
    mockReservedRockets.forEach((rocket) => {
      expect(getByText(rocket.name)).toBeInTheDocument();
    });
  });
});
