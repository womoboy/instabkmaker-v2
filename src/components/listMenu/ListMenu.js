import { useState, useEffect } from "react";

import "./ListMenu.css";

const ListMenu = ({ listMenu, handleChange }) => {
  const [menuClickState, setMenuClickState] = useState(false);
  const [selectOption, setSelectOption] = useState(null);

  useEffect(() => {
    console.log(menuClickState);
    if (selectOption) {
      console.log(selectOption);
    }
  }, [menuClickState]);

  const handleClickMenu = () => {
    setMenuClickState(!menuClickState);
  };

  const handleSelectClick = (event) => {
    setSelectOption({ id: event.target.id, title: event.target.value });
    setMenuClickState(false);
    handleChange(event.target.id);
  };

  return (
    <div className="list-menu">
      <div className="frame">
        <label>Select menu: </label>
      </div>
      <div className="frame">
        <div className="dropdown">
          <div className="select" onClick={handleClickMenu}>
            <span className="selected">{selectOption ? selectOption.title : "Choose menu"}</span>
            <div className={`caret ${menuClickState ? "active" : null}`}></div>
          </div>
          <ul className={`menu ${menuClickState ? "active" : null}`}>
            {listMenu &&
              listMenu.map((menu) => {
                return (
                  <li key={menu.id}>
                    <input
                      type="radio"
                      id={`${menu.id}`}
                      value={menu.title}
                      onClick={handleSelectClick}
                    />
                    <label htmlFor={`${menu.id}`}>{`${menu.title}, for: ${menu.app_format}, frame: ${menu.frame_type}, menu: ${menu.menu_type}`}</label>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListMenu;
