import React from 'react';
import { render } from '@testing-library/react';
import Acceptedmission from '../components/acceptedmission';

describe('Acceptedmission component', () => {
  const mission = {
    mission_id: '123',
    mission_name: 'Test Mission',
    description: 'Test Description',
    joining: true,
  };

  it('renders mission name correctly', () => {
    const { getByText } = render(<Acceptedmission mission={mission} />);
    expect(getByText('Test Mission')).toBeInTheDocument();
  });
});