import React from "react";
import { Navigate } from "react-router";

import { getCurrentUserLocalStorage } from "../../../shared/utilities/systemUtilities/storageUtilites/storageUtilities";

const ProtectedRoute = ({ isProtected, children }) => {
  const currentUser = getCurrentUserLocalStorage();

  if (currentUser && !isProtected) {
    return <Navigate to="/" replace />;
  } else if (!currentUser && isProtected) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default React.memo(ProtectedRoute);
