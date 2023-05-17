import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import Signin from "./components/main/Signin";
import Signup from "./components/main/Signup";
import Home from "./components/main/Home";
import UserAuth from "./auth/UserAuth";
import AdminProfile from "./components/admin/AdminProfile";
import NotFound from "./components/NotFound";
import AdminAuth from "./auth/AdminAuth";
import UserProvider from "./context/UserProvider";
import AdminProvider from "./context/AdminProvider";
import { useState } from "react";
import About from "./components/main/About";
import Startup from "./components/startup";
import Manageprofile from "./components/startup/manageProfile";
import StartupListing from "./components/main/StartupListing";



function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  return (
    <BrowserRouter>
      <AdminProvider currentUser={currentAdmin}>
        <UserProvider currentUser={currentUser}>
          <Routes>
            <Route element={<Navigate to="/main/home" />} path="/" />
            <Route
              element={
                // <AdminAuth>
                // </AdminAuth>
                <Admin />
              }
              path="admin"
            >
              <Route element={<AdminProfile />} path="profile" />
            </Route>

            <Route element={<Main />} path="main">
              <Route element={<Home />} path="home" />
              <Route element={<Signin />} path="signin" />
              <Route element={<Signup />} path="signup" />
              <Route element={<About />} path="about" />
              <Route element={<About />} path="listing" />
              <Route element={<StartupListing />} path="StartupListing" />
            </Route>

            <Route
              element={
                // <UserAuth>
                // </UserAuth>
                <Startup />
              }
              path="startup"
            >
              <Route path="profile" element={<Manageprofile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
