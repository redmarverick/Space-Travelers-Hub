import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => (
  <>
    <div>
      Name:
      {mission.mission_name}
    </div>
    <div>
      Description:
      {mission.description}
    </div>
    <div>
      id:
      {mission.mission_id}
    </div>
  </>
);

export default Mission;

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
