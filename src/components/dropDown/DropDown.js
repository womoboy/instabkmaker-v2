import { useEffect, useState } from "react";
import useFetch from "../../custom/hooks/useFetch";

const DropDown = ({ url, }) => {
  useFetch(url)
  return (
    <div className="drop-down">
      <div className="select"></div>
    </div>
  );
};

export default DropDown;
