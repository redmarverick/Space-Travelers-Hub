import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancel, reserve } from '../redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const handlerButton = () => {
    if (rocket.reserve) {
      dispatch(cancel(rocket.id));
    } else {
      dispatch(reserve(rocket.id));
    }
  };

  return (
    <div className="flex pt-4 justify-center">
      <div className="flex w-11/12">
        <div className="mr-4 h-48 w-72 bg-cover bg-center" style={{ backgroundImage: `url(${rocket.flickr_images})` }} />
        <div className="flex pt-2 flex-col w-4/5">
          <div className="font-bold text-xl">{rocket.name}</div>
          <div className="mt-2 w-full">
            <div className={`text-xs font-bold rounded p-0.5 px-1 mr-2 text-white ${rocket.reserve ? 'bg-teal-500 inline' : 'bg-gray-400 hidden'}`}>
              {rocket.reserve ? 'Reserved' : ''}
            </div>
            {rocket.description}
          </div>
          <button
            type="button"
            className={`w-max mt-4 py-2 px-2 rounded border ${rocket.reserve ? 'text-gray-500 border-gray-500 bg-transparent' : 'text-white border-blue-400 bg-blue-500'}`}
            onClick={() => handlerButton()}
          >
            {rocket.reserve ? 'Cancel reservation' : 'Reserve rocket'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    reserve: PropTypes.bool.isRequired,
  }).isRequired,
};
