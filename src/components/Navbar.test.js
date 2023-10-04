import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navigation from './Navbar';

describe('Navigation', () => {
  test('renders logo and title', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    const logo = screen.getByAltText('Logo');
    const title = screen.getByText("Space Travelers' Hub");
    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('renders Rockets and Missions links', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    const rocketsLink = screen.getByText('Rockets');
    const missionsLink = screen.getByText('Missions');
    expect(rocketsLink).toBeInTheDocument();
    expect(missionsLink).toBeInTheDocument();
  });

  test('renders My Profile link', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    const myProfileLink = screen.getByText('My Profile');
    expect(myProfileLink).toBeInTheDocument();
  });
});
