import './ListMenu.css';

const ListMenu = ({ ListMenu }) => {
  return (
    <div className="list-menu">
      <select>
        {ListMenu &&
          ListMenu.map((menu) => {
            return (
              <option value={menu.id} key={menu.id}>
                {`${menu.title} for: ${menu.app_format}, frame type: ${menu.frame_type}, menu type: ${menu.menu_type}`}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default ListMenu;
