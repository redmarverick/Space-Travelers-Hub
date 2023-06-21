import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from './redux/missions/missionsSlice';
import { getRockets } from './redux/rockets/rocketsSlice';
import MissionsList from './components/missions';
import RocketsList from './components/rockets';
import Profile from './components/profile';
import Nav from './components/nav';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route
            index
            element={(
              <div>
                <Profile />
              </div>
            )}
          />
          <Route path="rockets" element={<RocketsList />} />
          <Route path="missions" element={<MissionsList />} />
          <Route path="*" element={<div>Error 404: Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
