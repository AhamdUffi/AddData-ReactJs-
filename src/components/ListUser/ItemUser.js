import React from "react";
import "./ItemUser.css";

const ItemUser = (props) => {
  return (
    <li>
      {props.username} ( {props.age} Years Old )
    </li>
  );
};

export default ItemUser;
