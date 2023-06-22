import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Profile from '../components/profile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Profile', () => {
  test('renders Profile component without errors', () => {
    useSelector.mockReturnValueOnce([
      { mission_id: '1', joining: true, mission_name: 'mission1', description: 'description1' },
      { mission_id: '2', joining: true, mission_name: 'mission2', description: 'description2' },
    ]);

    useSelector.mockReturnValueOnce([
      { id: '1', reserve: true, name: 'rocket1', description: 'description1', flickr_images: ['image1'] },
      { id: '2', reserve: true, name: 'rocket2', description: 'description2', flickr_images: ['image2'] },
    ]);

    render(<Profile />);
  });
});
