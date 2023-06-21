import { useSelector } from 'react-redux';
import Mission from './mission';

const MissionsList = () => {
  const missions = useSelector((store) => store.missions.missionsArr);
  const { isLoading } = useSelector((store) => store.missions);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading Missions...</h1>
      </div>
    );
  }
  return (
    <div className="px-8 py-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-500 text-left">Mission</th>
            <th className="px-4 py-2 border border-gray-500 text-left">Description</th>
            <th className="px-4 py-2 border border-gray-500 text-left">Status</th>
            <th className="px-4 py-2 text-white border border-gray-500">button</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              mission={mission}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsList;
