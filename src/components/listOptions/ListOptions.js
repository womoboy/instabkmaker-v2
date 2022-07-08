import { useEffect, useState, useCallback } from "react";
import "./ListOptions.css";

const ListOptions = ({ menuId }) => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    if (menuId > 0) {
      getData();
    }
  }, [menuId]);

  const getData = useCallback(async () => {
    try {
      const res = await fetch(`http://localhost:8000/menus/${menuId}`);
      if (!res.ok) {
        throw Error("sorry we cant find data");
      } else {
        const data = await res.json();
        setOptions(data.options);
      }
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  });

  return (
    <div className="list-options">
      {options ? (
        <form>
          <h2>Options</h2>
          <div className="option-list-frame">
            {options.map((option) => {
              return (
                <div className="option" key={option.id}>
                  <label>{option.label}</label>
                  {option.type === "text" ? (
                    <div className="single-input-frame">
                      <input type="text" />
                    </div>
                  ) : (
                    <div className="double-input-frame">
                      <input type="text" />
                      <input type="number" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button className="save-button">Save</button>
        </form>
      ) : (
        <div className="no-select-frame">"No selected menu"</div>
      )}
    </div>
  );
};

export default ListOptions;
