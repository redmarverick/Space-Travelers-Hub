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
    <tr className="evenodd even:bg-white odd:bg-gray-200">
      <td className="px-4 py-2 border border-gray-500 font-bold">{mission.mission_name}</td>
      <td className="px-4 py-2 border border-gray-500">{mission.description}</td>
      <td className="p-1 text-center p-0 border border-gray-500">
        <div className={`w-40 rounded text-white ${mission.joining ? 'bg-teal-500' : 'bg-gray-400'}`}>
          {mission.joining ? 'Active Member' : 'NOT A MEMBER'}
        </div>
      </td>
      <td className="px-4 py-2 border border-gray-500">
        <button
          type="button"
          className={`w-40 p-2 border rounded px-4 py-2 ${mission.joining ? 'border-gray-500 text-gray-500' : 'border-red-500 text-red-500'}`}
          onClick={() => handlerButton(mission)}
        >
          {mission.joining ? 'Leave mission' : 'Join mission'}
        </button>
      </td>
    </tr>
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
