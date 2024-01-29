import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "../components/User/User";
import Home from "../components/Home/Home";
import AdminPanel from "../components/AdminPanel/AdminPanel";

const AppRouter = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="user" Component={User} />
          <Route path="admin" Component={AdminPanel} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
