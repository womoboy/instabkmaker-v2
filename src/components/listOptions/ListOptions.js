import { useEffect, useState, useCallback } from "react";

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

  const createForm = () => {
    if (options) {
      <form>
        {options.map((data) => {
          <div key={data.id} className="option">
            <label>{data.label}</label>
            <div className="inputs-frame">
              {data.type === "text" ? (
                <input type="text" />
              ) : (
                <>
                  <input type="text" />
                  <input type="number" />
                </>
              )}
            </div>
          </div>;
        })}
      </form>;
    }
  };

  return (
    <div className="list-options">
      {options ? (
        <form>
          {options.map((option) => {
            return (
              <div className="option" key={option.id}>
                <label>{option.label}</label>
                {option.type === "text" ? (
                  <div>
                    <input type="text" />
                  </div>
                ) : (
                  <div>
                    <input type="text" />
                    <input type="number" />
                  </div>
                )}
              </div>
            );
          })}
        </form>
      ) : (
        "No selected menu"
      )}
    </div>
  );
};

export default ListOptions;
