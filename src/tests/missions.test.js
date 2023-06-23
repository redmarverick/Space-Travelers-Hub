import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import MissionsList2 from './missions2';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('MissionsList2', () => {
  test('renders loading message when isLoading is true', () => {
    useSelector.mockReturnValue({ missionsArr: [], isLoading: true });

    render(<MissionsList2 />);

    const loadingMessage = screen.getByText('Loading Missions...');
    expect(loadingMessage).toBeInTheDocument();
  });

  test('renders missions table when isLoading is false', () => {
    const missions = [
      {
        mission_id: '1', mission_name: 'Mission 1', description: 'Description 1', joining: true,
      },
      {
        mission_id: '2', mission_name: 'Mission 2', description: 'Description 2', joining: false,
      },
    ];
    useSelector.mockReturnValue({ missionsArr: missions, isLoading: false });

    render(<MissionsList2 />);

    const missionRows = screen.getAllByRole('row');
    expect(missionRows).toHaveLength(3); // Includes table header row

    const missionNames = screen.getAllByText(/Mission \d/);
    expect(missionNames).toHaveLength(missions.length);

    const missionDescriptions = screen.getAllByText(/Description \d/);
    expect(missionDescriptions).toHaveLength(missions.length);

    const missionStatuses = screen.getAllByText(/Active Member|NOT A MEMBER/);
    expect(missionStatuses).toHaveLength(missions.length);

    const missionButtons = screen.getAllByText(/Join mission|Leave mission/);
    expect(missionButtons).toHaveLength(missions.length);
  });
});
