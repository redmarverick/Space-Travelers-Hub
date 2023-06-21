import {
  Outlet,
  NavLink,
} from 'react-router-dom';
import planetImage from '../assets/planet.png';

export default function Nav() {
  return (
    <>
      <header className="bg-white py-4 px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img src={planetImage} alt="planet" className="h-8" />
          <h1 className="text-3xl montserrat font-bold text-black ml-2">Space Travelers&apos; Hub</h1>
        </div>
        <nav className="flex items-center">
          <NavLink to="/missions" exact="true" activeClassName="active" className="montserrat text-black text-sm font-medium tracking-wide uppercase ml-4">
            Missions
          </NavLink>
          <NavLink to="/rockets" exact="true" activeClassName="active" className="montserrat text-black text-sm font-medium tracking-wide uppercase ml-4">
            Rockets
          </NavLink>
          <NavLink to="/" exact="true" activeClassName="active" className="montserrat text-black text-sm font-medium tracking-wide uppercase ml-4">
            My Profile
          </NavLink>
        </nav>
      </header>
      <div className="not-navbar"><Outlet /></div>
    </>
  );
}
