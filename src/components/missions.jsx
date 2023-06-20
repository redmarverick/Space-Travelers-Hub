import { useSelector } from 'react-redux';
import Mission from './mission';

const MissionsList = () => {
  const missions = useSelector((store) => store.missions.missionsArr);
  const { isLoading } = useSelector((store) => store.missions);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <ul>
      {missions.map((mission) => (
        <Mission
          key={mission.mission_id}
          mission={mission}
        />
      ))}
    </ul>
  );
};

export default MissionsList;
