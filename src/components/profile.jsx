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
    <div className="flex bg-white h-full">
      <div className="w-1/2 ml-8 h-full">
        <h2 className="text-2xl font-bold p-0 m-8 my-2">My Missions</h2>
        <div className="rounded-lg border border-gray-300 my-1 ml-8">
          <table className="rounded-lg w-full p-8">
            <tbody className="p-8 w-full">
              {filteredMissions.map((obj) => (
                <Acceptedmission key={obj.mission_id} mission={obj} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-1/2 mr-8 h-full">
        <h2 className="text-2xl font-bold p-0 m-8 my-2">My Rockets</h2>
        <div className="rounded-lg border border-gray-300 my-1 ml-8">
          <table className="rounded-lg w-full p-8">
            <tbody className="p-8 rounded-lg border">
              {filteredRocket.map((obj) => (
                <Reservedrocket key={obj.id} rocket={obj} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
