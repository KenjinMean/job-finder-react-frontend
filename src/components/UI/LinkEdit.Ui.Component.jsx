import React from "react";
import { Link } from "react-router-dom";

import editIcon from "../../assets/icons/edit3.png";

export default function LinkEditUiComponent({ to, ...restProps }) {
  return (
    <Link
      className="p-2 transition-all rounded-full hover:bg-slate-300"
      to={to}
      {...restProps}
    >
      <img
        className="block w-5 h-5"
        src={editIcon}
        alt="Edit Icon. Attribution:  Pencil icons created by Pixel perfect https://www.flaticon.com/free-icons/pencil"
      />
    </Link>
  );
}
