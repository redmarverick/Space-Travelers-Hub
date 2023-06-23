// // FAILING
// describe('TestNotPassing', () => {
//     test('message just to omit file', () => {
//       expect(true).toBeTruthy;
//     });
//   });

import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import RocketsList2 from './rockets2';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('RocketsList2', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state when isLoading is true', () => {
    useSelector.mockReturnValue({ rocketsArr: [], isLoading: true });

    const { getByText } = render(<RocketsList2 />);
    const loadingText = getByText('Loading Rockets...');
    expect(loadingText).toBeInTheDocument();
  });

  test('renders rocket list when isLoading is false', () => {
    const mockRockets = [
      {
        id: '1',
        name: 'Falcon 9',
        description: 'A two-stage rocket designed and manufactured by SpaceX',
        flickr_images: ['image1.jpg', 'image2.jpg'],
        reserve: false,
      },
      {
        id: '2',
        name: 'Atlas V',
        description: 'An expendable launch system used by United Launch Alliance',
        flickr_images: ['image3.jpg', 'image4.jpg'],
        reserve: true,
      },
    ];

    useSelector.mockReturnValue({ rocketsArr: mockRockets, isLoading: false });

    const { getByText } = render(<RocketsList2 />);

    mockRockets.forEach((rocket) => {
      const rocketName = getByText(rocket.name);
      expect(rocketName).toBeInTheDocument();
    });
  });
});
