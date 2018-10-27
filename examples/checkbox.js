import React from "react";
import { useToggle } from "../";

export default ({ initialValue, children }) => {
  const [value, toggle] = useToggle(initialValue);
  return (
    <label>
      <input type="checkbox" onChange={toggle} />
      {children}
    </label>
  );
};
