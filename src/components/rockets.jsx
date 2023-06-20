import { useSelector } from 'react-redux';
import Rocket from './rocket';

const RocketsList = () => {
  const rockets = useSelector((store) => store.rockets.rocketsArr);
  const { isLoading } = useSelector((store) => store.rockets);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading Rockets...</h1>
      </div>
    );
  }
  return (
    <ul>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </ul>
  );
};

export default RocketsList;
