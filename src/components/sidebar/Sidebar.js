import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TheatersIcon from "@mui/icons-material/Theaters";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import SettingsIcon from "@mui/icons-material/Settings";
import './Sidebar.css';

const Sidebar = ({ toggleState }) => {

  return (
    <aside className={`sidebar ${toggleState ? 'sidebar-show' : null}`}>
      <nav className="nav">
        <div className="nav-list">
          <Link to="/" className="nav-link">
            <div className="frame icon-frame">
              <div className='link-neomorph'>
                <HomeIcon className="nav-link-icon" />
              </div>
            </div>
            <div className="frame name-frame">
              <div className="nav-link-name">Home</div>
            </div>
          </Link>
          <Link to="/dashboard" className="nav-link">
            <div className="frame icon-frame">
              <div className='link-neomorph'>
                <DashboardIcon className="nav-link-icon" />
              </div>
            </div>
            <div className="frame name-frame">
              <div className="nav-link-name">Dashboard</div>
            </div>
          </Link>
          <Link to="/media" className="nav-link">
            <div className="frame icon-frame">
              <div className='link-neomorph'>
                <TheatersIcon className="nav-link-icon" />
              </div>
            </div>
            <div className="frame name-frame">
              <div className="nav-link-name">Media</div>
            </div>
          </Link>
          <Link to="/design" className="nav-link">
            <div className="frame icon-frame">
              <div className='link-neomorph'>
                <ColorLensIcon className="nav-link-icon" />
              </div>
            </div>
            <div className="frame name-frame">
              <div className="nav-link-name">Design</div>
            </div>
          </Link>
          <Link to="/setting" className="nav-link">
            <div className="frame icon-frame">
              <div className='link-neomorph'>
                <SettingsIcon className="nav-link-icon" />
              </div>
            </div>
            <div className="frame name-frame">
              <div className="nav-link-name">Setting</div>
            </div>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
