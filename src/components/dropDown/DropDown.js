import useFetch from "../../custom/hooks/useFetch";
import { useState, useEffect } from "react";
import "./DropDown.css";

const DropDown = ({ url, title }) => {
  const [response, error, isPending] = useFetch(url);
  const [menuClickState, setMenuClickState] = useState(false);
  const [selectOption, setSelectOption] = useState(null);

  useEffect(() => {
    if(selectOption) {
      console.log(selectOption);
    }
  }, [selectOption])

  const handleOptionClick = (event) => {
    setSelectOption({id: event.target.id.split('-').filter(word => word !== title).join(''), title: event.target.value});
    setMenuClickState(false);
  };

  const handleSelectClick = () => {
    setMenuClickState(!menuClickState);
  }

  return (
    <div className="drop-down">
      <div className="select-frame">
        <span
          className="select-label"
          onClick={() => handleSelectClick()}
        >
          {selectOption ? selectOption.title : `Choose ${title}`}
        </span>
        <div className={`caret ${menuClickState ? "active" : "null"}`}></div>
      </div>
      <ul className={`list-option ${menuClickState ? 'active' : "null"}`}>
        {isPending && "loading ..."}
        {error && `Somting is wrong the error is: ${error}`}
        {response &&
          response.map((data) => {
            return (
              <li className="option" key={data.id}>
                <input
                  className="no-display"
                  id={`${title}-${data.id}`}
                  value={data.title}
                  type="radio"
                  onClick={handleOptionClick}
                />
                <label htmlFor={`${title}-${data.id}`}>{data.title}</label>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default DropDown;
