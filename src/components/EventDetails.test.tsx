import React from 'react';
import { render, screen } from '@testing-library/react';
import EventDetails from './EventDetails'; // Adjust the import path if necessary

describe('EventDetails Component', () => {
  test('renders event details correctly', () => {
    render(<EventDetails />);

    // Check for headings
    expect(screen.getByText('When')).toBeInTheDocument();
    expect(screen.getByText('Where')).toBeInTheDocument();
    expect(screen.getByText('Colors of the Day')).toBeInTheDocument();

    // Check for date and location
    expect(screen.getByText('Saturday, November 15th, 2025')).toBeInTheDocument();
    expect(screen.getByText('Uyo Akwa Ibom')).toBeInTheDocument();
  });

  test('renders color swatches correctly', () => {
    render(<EventDetails />);

    // Check for color names
    expect(screen.getByText('Wine')).toBeInTheDocument();
    expect(screen.getByText('Gold')).toBeInTheDocument();
    expect(screen.getByText('Peach')).toBeInTheDocument();
  });
});
