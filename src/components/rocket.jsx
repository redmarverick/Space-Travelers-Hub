import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserve } from '../redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  return (
    <div className="px-8 py-4">
      <div className="py-1 font-bold">
        Name:
        {rocket.name}
      </div>
      <div className="py-1">
        Description:
        {rocket.description}
      </div>
      <div className="py-1">
        id:
        {rocket.id}
      </div>
      <button type="button" className="p-2" onClick={() => dispatch(reserve(rocket.id))}>join</button>
      <img src={rocket.flickr_images} alt="rocket" />
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.string.isRequired,
  }).isRequired,
};
