import PropTypes from 'prop-types';

const Acceptedmission = ({ mission }) => (
  <>
    <div>{mission.mission_name}</div>
  </>
);

export default Acceptedmission;

Acceptedmission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joining: PropTypes.bool.isRequired,
  }).isRequired,
};
