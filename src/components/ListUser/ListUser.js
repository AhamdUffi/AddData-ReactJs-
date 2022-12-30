import React from "react";
import ItemUser from "./ItemUser";

import "./ListUser.css";

const ListUser = (props) => {
  return (
    <ul>
      {props.Users.map((user) => (
        <ItemUser username={user.userName} age={user.age} key={user.id} />
      ))}
    </ul>
  );
};

export default ListUser;
