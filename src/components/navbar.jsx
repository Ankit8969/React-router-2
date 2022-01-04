import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin </Link>
      </li>
    </ul>
  );
};

/*
> We can also use <a hre=""></a> tag for links
> When ever we click on "anchor" tag it automatically reload the whole page but in case of "Link" it prevent from the automatically reload
*/

export default NavBar;
