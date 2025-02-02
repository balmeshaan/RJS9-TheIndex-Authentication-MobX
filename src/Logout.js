import React from "react";
import authStore from "./stores/authStore";
import { observer } from "mobx-react";

const Logout = () => {
  return (
    <button className="btn btn-danger" onClick={authStore.logoutUser}>
      Logout
    </button>
  );
};

export default observer(Logout);
