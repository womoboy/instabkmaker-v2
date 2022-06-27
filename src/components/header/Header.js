import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <div className="header-toggle">
          <MenuIcon />
        </div>
      </div>
      <div className="center">center</div>
      <div className="right">right</div>
    </header>
  );
};

export default Header;
