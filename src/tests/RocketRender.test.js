import React from 'react';
import { render } from '@testing-library/react';
import RocketRender from '../components/RocketRender';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

const mockItem = {
  id: '1',
  name: 'Sample Rocket',
  description: 'This is a sample rocket',
  flickr_images: ['image1.jpg', 'image2.jpg'],
  reserved: false,
};

describe('RocketRender Component', () => {
  it('renders without errors', () => {
    render(<RocketRender Item={mockItem} />);
  });

  it('displays rocket name and description', () => {
    const { getByText } = render(<RocketRender Item={mockItem} />);
    expect(getByText('Sample Rocket')).toBeInTheDocument();
    expect(getByText('This is a sample rocket')).toBeInTheDocument();
  });

  it('renders "Reserve Rocket" button when not reserved', () => {
    const { getByText } = render(<RocketRender Item={mockItem} />);
    expect(getByText('Reserve Rocket')).toBeInTheDocument();
  });

  it('renders "Cancel Reservation" button when reserved', () => {
    const reservedItem = { ...mockItem, reserved: true };
    const { getByText } = render(<RocketRender Item={reservedItem} />);
    expect(getByText('Cancel Reservation')).toBeInTheDocument();
  });

  it('validates PropTypes for Item prop', () => {
    const invalidItem = {};
    console.error = jest.fn();
    render(<RocketRender Item={invalidItem} />);
    expect(console.error).toHaveBeenCalled();
  });
});
