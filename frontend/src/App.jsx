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
import { Toaster } from "react-hot-toast";
import PersonBL from "./pages/PersonBL";

const App = () => {
  const { user } = useAuthContext();
  return (
    <Router>
      <GlobalStyles />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          duration: 3000,
        }}
      />

      <Routes>
        <Route
          path="/"
          element={user ? <AppLayout /> : <Navigate to="login" />}
        >
          {/* Admin roles */}
          <Route
            path="/"
            element={user?.role === "admin" ? <Documents /> : <PersonBL />}
          />
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

          <Route
            path="/Bls"
            element={user?.role === "person" && <PersonBL />}
          />
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
