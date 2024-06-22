import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Users from "./pages/Users";
import Documents from "./pages/Documents";
import GlobalStyles from "./styles/GlobalStyles";
import Comments from "./pages/Comments";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { user } = useAuthContext();
  return (
    <Router>
      <GlobalStyles />

      <Routes>
        <Route
          path="/"
          element={
            user && user.role === "admin" ? (
              <AppLayout />
            ) : (
              <Navigate to="login" />
            )
          }
        >
          <Route path="users" element={<Users />} />
          <Route path="documents" element={<Documents />} />
          <Route path="comments" element={<Comments />} />
        </Route>

        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
