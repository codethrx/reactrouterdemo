import React from "react";
import { Outlet, Link } from "react-router-dom";
function Forms() {
  return (
    <div>
      Forms
      <div>
        <Link to="a">A</Link>
        <Link to="b">B</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Forms;
