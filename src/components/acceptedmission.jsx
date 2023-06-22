import PropTypes from 'prop-types';

const Acceptedmission = ({ mission }) => (
  <>
    <tr className="p-2 border border-x-transparent border-gray-300 first:border-t-transparent last:border-b-transparent w-full pb-8 text-lg">
      <div className="m-4 mb-8 font-bold">{mission.mission_name}</div>
    </tr>
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
