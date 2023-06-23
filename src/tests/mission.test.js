import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Mission from '../components/mission';
import { joining, leaving } from '../redux/missions/missionsSlice';

jest.mock('axios');
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Mission component', () => {
  const mission = {
    mission_id: '123',
    mission_name: 'Test Mission',
    description: 'Test Description',
    joining: true,
  };

  it('renders mission details correctly', () => {
    const { getByText } = render(<Mission mission={mission} />);
    expect(getByText('Test Mission')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByText('Active Member')).toBeInTheDocument();
    expect(getByText('Leave mission')).toBeInTheDocument();
  });

  it('dispatches leaving action when leave mission button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const { getByText } = render(<Mission mission={mission} />);
    const leaveButton = getByText('Leave mission');
    fireEvent.click(leaveButton);

    expect(mockDispatch).toHaveBeenCalledWith(leaving('123'));
  });

  it('dispatches joining action when join mission button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const { getByText } = render(<Mission mission={{ ...mission, joining: false }} />);
    const joinButton = getByText('Join mission');
    fireEvent.click(joinButton);

    expect(mockDispatch).toHaveBeenCalledWith(joining('123'));
  });

  // Add more test cases as needed
});
