import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserve } from '../redux/missions/missionsSlice';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <div className="px-8 py-4">
      <div className="py-1 font-bold">
        Name:
        {mission.mission_name}
      </div>
      <div className="py-1">
        Description:
        {mission.description}
      </div>
      <div className="py-1">
        id:
        {mission.mission_id}
      </div>
      <button type="button" className="p-2" onClick={() => dispatch(reserve(mission.mission_id))}>reserve</button>
    </div>
  );
};

export default Mission;

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
