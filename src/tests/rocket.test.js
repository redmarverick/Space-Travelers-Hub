import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Rocket from '../components/rocket';
import { cancel, reserve } from '../redux/rockets/rocketsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();

describe('Rocket', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Rocket component without errors', () => {
    const mockRocket = {
      id: '1',
      name: 'Falcon 9',
      description: 'A two-stage rocket designed and manufactured by SpaceX',
      flickr_images: ['image1.jpg', 'image2.jpg'],
      reserve: false,
    };
    render(<Rocket rocket={mockRocket} />);
  });

  test('displays the rocket name correctly', () => {
    const mockRocket = {
      id: '1',
      name: 'Falcon 9',
      description: 'A two-stage rocket designed and manufactured by SpaceX',
      flickr_images: ['image1.jpg', 'image2.jpg'],
      reserve: false,
    };
    const { getByText } = render(<Rocket rocket={mockRocket} />);
    const rocketName = getByText(mockRocket.name);
    expect(rocketName).toBeInTheDocument();
  });

  test('dispatches reserve action when "Reserve rocket" button is clicked', () => {
    const mockRocket = {
      id: '1',
      name: 'Falcon 9',
      description: 'A two-stage rocket designed and manufactured by SpaceX',
      flickr_images: ['image1.jpg', 'image2.jpg'],
      reserve: false,
    };
    const { getByText } = render(<Rocket rocket={mockRocket} />);
    const reserveButton = getByText('Reserve rocket');
    fireEvent.click(reserveButton);
    expect(mockDispatch).toHaveBeenCalledWith(reserve(mockRocket.id));
  });

  test('dispatches cancel action when "Cancel reservation" button is clicked', () => {
    const mockRocket = {
      id: '1',
      name: 'Falcon 9',
      description: 'A two-stage rocket designed and manufactured by SpaceX',
      flickr_images: ['image1.jpg', 'image2.jpg'],
      reserve: true,
    };
    const { getByText } = render(<Rocket rocket={mockRocket} />);
    const cancelButton = getByText('Cancel reservation');
    fireEvent.click(cancelButton);
    expect(mockDispatch).toHaveBeenCalledWith(cancel(mockRocket.id));
  });
});
