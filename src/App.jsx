import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  NavLink,
} from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="bg-white py-4 px-8 flex items-center">
        <div className="flex items-center">
          <h1 className="text-3xl montserrat font-bold text-blue-500">Bookstore CMS</h1>
          <nav className="ml-6">
            <NavLink to="/" exact="true" activeclassname="active" className="montserrat text-black text-sm font-medium tracking-wide uppercase">
              Home
            </NavLink>
            <NavLink to="/Missions" exact="true" activeclassname="active" className="montserrat text-black text-sm font-medium tracking-wide uppercase ml-4">
              Categories
            </NavLink>
          </nav>
        </div>
        <figure className="flex items-center justify-center ml-auto">
          <div className="bg-white border border-solid border-gray-300 rounded-full h-12 w-12 flex items-center justify-center">
            <span className="text-azure-500 text-xl">&#128100;</span>
          </div>
        </figure>
      </header>
      <div className="not-navbar"><Outlet /></div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={(
              <div>
                Route by default
              </div>
            )}
          />
          <Route path="rockets" element={<div>rockets router</div>} />
          <Route path="misions" element={<div>misions router</div>} />
          <Route path="*" element={<div>Error 404: Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
