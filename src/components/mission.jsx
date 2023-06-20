import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => (
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
  </div>
);

export default Mission;

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
