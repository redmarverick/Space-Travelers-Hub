import React from 'react';
import { render } from '@testing-library/react';
import Reservedrocket from '../components/reservedrocket';

const mockRocket = {
  id: '1',
  name: 'Falcon 9',
  description: 'A two-stage rocket designed and manufactured by SpaceX',
  flickr_images: ['image1.jpg', 'image2.jpg'],
  reserve: true,
};

describe('Reservedrocket', () => {
  test('renders Reservedrocket component without errors', () => {
    render(<Reservedrocket rocket={mockRocket} />);
  });

  test('displays the rocket name correctly', () => {
    const { getByText } = render(<Reservedrocket rocket={mockRocket} />);
    const rocketName = getByText(mockRocket.name);
    expect(rocketName).toBeInTheDocument();
  });
});
