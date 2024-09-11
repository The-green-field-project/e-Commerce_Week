import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

// Main Components
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Loading from "./components/Loading.js";

// Custom hooks
import { useAuth } from "./hooks/useAuth";

// Pages
import About from "./pages/About.js";
import AdminDashboard from "./pages/AdminDashboard.js";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import SellerDashboard from "./pages/SellerDashboard.js";
import Profile from "./pages/Profile.js";
import Cart from "./pages/Cart.js";
import Wishlist from "./pages/Wishlist.js";

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
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<About />} /> {/* About Page */}
          <Route path="/cart" element={<Cart />} /> {/* Cart Page */}
          {/* Authentication Routes */}
          <Route
            path="/login"
            element={
              !isAuthenticated ? <Login login={login} /> : <Navigate to="/" />
            }
          />{" "}
          {/* Login Page, redirects to home if already authenticated */}
          <Route
            path="/register"
            element={
              isAuthenticated ? (
                <Register register={register} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          {/* Register Page, accessible if not authenticated */}
          <Route
            path="/wishlist"
            element={isAuthenticated ? <Wishlist /> : <Navigate to="/" />}
          />{" "}
          {/* Wishlist Page, redirects to home if not authenticated */}
          {/* User-Specific Routes */}
          <Route
            path="/user"
            element={
              isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />
            }
          />{" "}
          {/* Redirect logic for user-specific content */}
          {/* Profile Routes */}
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />{" "}
          {/* Profile Page, redirects to login if not authenticated */}
          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              isAuthenticated && isAdmin ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />{" "}
          {/* Admin Dashboard, accessible only if authenticated and admin */}
          {/* Seller Routes */}
          <Route
            path="/seller"
            element={
              isAuthenticated && isSeller ? (
                <SellerDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />{" "}
          {/* Seller Dashboard, accessible only if authenticated and seller */}
          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} /> {/* 404 Not Found Page */}
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
