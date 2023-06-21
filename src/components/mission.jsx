import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joining, leaving } from '../redux/missions/missionsSlice';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  const handlerButton = () => {
    if (mission.joining) {
      dispatch(leaving(mission.mission_id));
    } else {
      dispatch(joining(mission.mission_id));
    }
  };
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
      <button type="button" className="p-2" onClick={() => handlerButton()}>{mission.joining ? 'Leave mission' : 'Join mission'}</button>
    </div>
  );
};

export default Mission;

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joining: PropTypes.bool.isRequired,
  }).isRequired,
};
