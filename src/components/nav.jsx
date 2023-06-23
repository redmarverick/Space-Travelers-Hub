import {
  Outlet,
  NavLink,
} from 'react-router-dom';
import planetImage from '../assets/planet.png';

export default function Nav() {
  return (
    <>
      <header className="bg-white pb-0 py-4 px-8 flex items-center flex-col h-28 justify-center">
        <div className="flex items-center w-full">
          <div className="flex mb-1 items-center w-full">
            <img src={planetImage} alt="planet" className="h-16" />
            <h1 className="text-4xl montserrat font-bold text-black ml-2">Space Travelers&apos; Hub</h1>
          </div>
          <nav className="flex items-center text-blue-500 mr-4">
            <NavLink to="/missions" exact="true" activeClassName="active" className="montserrat text-sm font-bold tracking-wide uppercase ml-4">
              Missions
            </NavLink>
            <NavLink to="/rockets" exact="true" activeClassName="active" className="montserrat text-sm font-bold tracking-wide uppercase ml-4">
              Rockets
            </NavLink>
            <span className="border ml-4 border-black h-4" />
            <NavLink to="/" exact="true" activeClassName="active" className="montserrat w-max text-sm font-bold tracking-wide uppercase ml-4">
              My Profile
            </NavLink>
          </nav>
        </div>
        <span className="w-full border border-gray-300 border-b-transparent mt-6" />
      </header>
      <div className="not-navbar"><Outlet /></div>
    </>
  );
}
