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
import PersonLayout from "./pages/PersonLayout";
import AdminHome from "./pages/AdminHome";
import PersonHome from "./pages/PersonHome";
import RoleProtectedRoute from "./components/ProtectedRoutes";
import Bls from "./pages/Bls";

const App = () => {
  const { user } = useAuthContext();
  return (
    <Router>
      <GlobalStyles />

      <Routes>
        <Route
          path="/"
          element={user ? <AppLayout /> : <Navigate to="login" />}
        >
          {/* Admin roles */}
          <Route path="/" element={user?.role === "admin" && <AdminHome />} />
          <Route path="users" element={user?.role === "admin" && <Users />} />
          <Route
            path="documents"
            element={user?.role === "admin" && <Documents />}
          />
          <Route
            path="comments"
            element={user?.role === "admin" && <Comments />}
          />
          {/* Person roles */}

          <Route path="/" element={user?.role === "person" && <PersonHome />} />
          <Route path="/Bls" element={user?.role === "person" && <Bls />} />
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
