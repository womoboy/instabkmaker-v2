import { Link } from "react-router-dom";

//add icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HotelIcon from '@mui/icons-material/Hotel';
import CollectionsIcon from '@mui/icons-material/Collections';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <section>
      <header className="header">
        <div className="header-toggle">
          <MenuIcon />
        </div>
      </header>

      <aside className="sidebar">
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <HomeIcon className="nav-logo-icon" />
              <span className="nav-logo-name">Homepage</span>
            </Link>

            <div className="nav-list">
              <Link to="/dashboard" className="nav-link">
                <DashboardIcon className="nav-link-icon" />
                <span className="nav-logo-name">Dashboard</span>
              </Link>

              <Link to="/hotel" className="nav-link">
                <HotelIcon className="nav-link-icon" />
                <span className="nav-logo-name">Hotel</span>
              </Link>

              <Link to="/gallery" className="nav-link">
                <CollectionsIcon className="nav-link-icon" />
                <span className="nav-logo-name">Gallery</span>
              </Link>

              <Link to="/gallery" className="nav-link">
                <CollectionsIcon className="nav-link-icon" />
                <span className="nav-logo-name">Transaction</span>
              </Link>

              <Link to="/transaction" className="nav-link">
                <AttachMoneyIcon className="nav-link-icon" />
                <span className="nav-logo-name">Transaction</span>
              </Link>
            </div>

            <Link to="/logout" className="nav-logo">
                <LogoutIcon className="nav-logo-icon" />
                <span className="nav-logo-name">Logout</span>
              </Link>
          </div>
        </nav>
      </aside>

      <h1>Content</h1>
    </section>
  );
};

export default Sidebar;
