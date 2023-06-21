import { useSelector } from 'react-redux';
import Acceptedmission from './acceptedmission';
import Reservedrocket from './reservedrocket';

const Profile = () => {
  const filteredMissions = useSelector(
    (store) => store.missions.missionsArr,
  ).filter((obj) => obj.joining);

  const filteredRocket = useSelector(
    (store) => store.rockets.rocketsArr,
  ).filter((obj) => obj.reserve);

  return (
    <>
      <div>
        {filteredMissions.map((obj) => (
          <Acceptedmission key={obj.mission_id} mission={obj} />
        ))}
      </div>
      <div>
        {filteredRocket.map((obj) => (
          <Reservedrocket key={obj.id} rocket={obj} />
        ))}
      </div>
    </>

  );
};

export default Profile;
