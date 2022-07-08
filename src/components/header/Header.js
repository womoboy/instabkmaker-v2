import MenuIcon from "@mui/icons-material/Menu";
import './Header.css';

const Header = ({ handleToggle, toggleState }) => {
  return (
    <header className={`header ${toggleState ? 'toggle-space' : null}`}>
      <div className="left">
        <div className="header-toggle" onClick={ handleToggle }>
          <MenuIcon />
        </div>
      </div>
      <div className="center">center</div>
      <div className="right">right</div>
    </header>
  );
};

export default Header;
