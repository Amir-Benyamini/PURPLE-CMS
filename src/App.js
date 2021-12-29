import React, { useEffect } from "react";
import { ProfileScreen } from "./components/ProfileScreen";
import { ProfileCMS } from "./components/ProfileCMS";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
const userActions = require("./actions/user");
function App(props) {
  useEffect(() => {
    userActions.loadUser();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfileScreen store={props.store} />} />
        <Route path="/cms" element={<ProfileCMS store={props.store} />} />
      </Routes>
    </div>
  );
}

export default App;
