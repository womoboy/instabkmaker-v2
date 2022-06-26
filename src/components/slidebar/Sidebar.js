import { Link } from "react-router-dom";
import { useState } from "react";

//add icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HotelIcon from '@mui/icons-material/Hotel';
import CollectionsIcon from '@mui/icons-material/Collections';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  const [ show,setShow ] = useState(false);

  return (
    <main className={ show ? 'space-toggle': null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <MenuIcon />
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <HomeIcon className="nav-logo-icon" />
              <span className="nav-logo-name">Homepage</span>
            </Link>

            <div className="nav-list show">
              <Link to="/dashboard" className="nav-link active">
                <DashboardIcon className="nav-link-icon" />
                <span className="nav-link-name">Dashboard</span>
              </Link>

              <Link to="/hotel" className="nav-link">
                <HotelIcon className="nav-link-icon" />
                <span className="nav-link-name">Hotel</span>
              </Link>

              <Link to="/gallery" className="nav-link">
                <CollectionsIcon className="nav-link-icon" />
                <span className="nav-link-name">Gallery</span>
              </Link>

              <Link to="/gallery" className="nav-link">
                <CollectionsIcon className="nav-link-icon" />
                <span className="nav-link-name">Transaction</span>
              </Link>

              <Link to="/transaction" className="nav-link">
                <AttachMoneyIcon className="nav-link-icon" />
                <span className="nav-link-name">Transaction</span>
              </Link>
            </div>

            <Link to="/logout" className="nav-logo">
                <LogoutIcon className="nav-logo-icon" />
                <span className="nav-logo-name">Logout</span>
              </Link>
          </div>
        </nav>
      </aside>
      <h1>content</h1>
    </main>
  );
};

export default Sidebar;
