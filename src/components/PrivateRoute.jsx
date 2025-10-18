import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = ({ publicPage = false, adminOnly = false }) => {
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user.roles?.includes("ROLE_ADMIN");
  const isSeller = user && user.roles?.includes("ROLE_SELLER");

  const location = useLocation();

  if (publicPage) {
    return user ? <Navigate to="/" replace /> : <Outlet />;
  }

  if (adminOnly) {
    if (!isAdmin) {
      return <Navigate to="/" replace />;
    }
    return <Outlet />;
  }

  if (user && !isSeller) {
    return <Outlet />;
  }

  if (isSeller && !isAdmin) {
    const sellerAllowedPaths = ["/admin/orders", "/admin/products"];
    const sellerAllowed = sellerAllowedPaths.some((path) =>
      location.pathname.startsWith(path)
    );
    if (!sellerAllowed) {
      return <Navigate to="/" replace />;
    }
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
