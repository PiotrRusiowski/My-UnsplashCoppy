import React, { useContext } from "react";
import RootContext from "../../../../context";

const UsersList = () => {
  const context = useContext(RootContext);
  const { usersList } = context;
  return <>{usersList.map((user) => user.first_name)}</>;
};

export default UsersList;
