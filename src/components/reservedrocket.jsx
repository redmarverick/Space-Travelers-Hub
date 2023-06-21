import PropTypes from 'prop-types';

const Reservedrocket = ({ rocket }) => (
  <>
    <div>{rocket.name}</div>
  </>
);

export default Reservedrocket;

Reservedrocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    reserve: PropTypes.bool.isRequired,
  }).isRequired,
};
