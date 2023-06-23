import PropTypes from 'prop-types';

const Reservedrocket = ({ rocket }) => (
  <>
    <tr className="p-2 border border-x-transparent border-gray-300 first:border-t-transparent last:border-b-transparent w-full pb-8 text-lg">
      <div className="m-4 mb-8 font-bold">{rocket.name}</div>
    </tr>
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
