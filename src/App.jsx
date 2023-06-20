import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  NavLink,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from './redux/missions/missionsSlice';
import { getRockets } from './redux/rockets/rocketsSlice';

function Layout() {
  return (
    <>
      <header className="bg-white py-4 px-8 flex items-center justify-between">
        <h1 className="text-3xl montserrat font-bold text-blue-500">Bookstore CMS</h1>
        <nav className="flex items-center">
          <NavLink to="/missions" exact="true" activexlassname="active" className="montserrat text-black text-sm font-medium tracking-wide uppercase ml-4">
            <div>
              Missions
            </div>
          </NavLink>
          <NavLink to="/rockets" exact="true" activeclassname="active" className="montserrat text-black text-sm font-medium tracking-wide uppercase ml-4">
            <div>
              Rockets
            </div>
          </NavLink>
          <NavLink to="/" exact="true" activeclassname="active" className="profile ml-4">
            <figure className="flex items-center justify-center ml-auto">
              <div className="bg-white border border-solid border-gray-300 rounded-full h-12 w-12 flex items-center justify-center">
                <span className="text-azure-500 text-xl">&#128100;</span>
              </div>
            </figure>
          </NavLink>
        </nav>
      </header>
      <div className="not-navbar"><Outlet /></div>
    </>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={(
              <div>
                Profile
              </div>
            )}
          />
          <Route path="rockets" element={<div>rockets router</div>} />
          <Route path="missions" element={<div>missions router</div>} />
          <Route path="*" element={<div>Error 404: Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
