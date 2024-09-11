import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

//Main Components
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Loading from "./components/Loading.js";

//Custom hooks
import { useAuth } from "./hooks/useAuth";

//Pages
import About from "./pages/About.js";
import AdminDashboard from "./pages/AdminDashboard.js";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import SellerDashboard from "./pages/SellerDashboard.js";

// Main App Component
export default function App() {
  return (
    <Router>
      <AppContent />
      {/* Extracted App content to ensure it uses Router context */}
    </Router>
  );
}

// Extracted App Content
function AppContent() {
  const {
    isAuthenticated,
    isAdmin,
    isSeller,
    loading,
    login,
    register,
    logout,
  } = useAuth();

  // Handling loading state if authentication state is pending
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header
        isAuthenticated={isAuthenticated}
        isAdmin={isAdmin}
        isSeller={isSeller}
        logout={logout}
      />
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Authentication Routes */}
          <Route
            path="/login"
            element={
              !isAuthenticated ? <Login login={login} /> : <Navigate to="/" />
            }
          />
          <Route
            path="/register"
            element={
              !isAuthenticated ? (
                <Register register={register} />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          {/* Protected User Routes */}
          <Route
            path="/user"
            element={
              isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />
            }
          />

          {/* Protected Admin Routes */}
          <Route
            path="/admin"
            element={
              isAuthenticated && isAdmin ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Protected Seller Routes */}
          <Route
            path="/seller"
            element={
              isAuthenticated && isSeller ? (
                <SellerDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer
        isAuthenticated={isAuthenticated}
        isAdmin={isAdmin}
        isSeller={isSeller}
        logout={logout}
      />
    </>
  );
}
