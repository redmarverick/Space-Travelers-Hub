import { useSelector } from 'react-redux';
import Rocket from '../components/rocket';

const RocketsList2 = () => {
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
      {rockets.rocketsArr.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </ul>
  );
};

export default RocketsList2;
