import React from "react";
import { Navigate, useLocation } from "react-router"; 
import { useAuth } from "../AuthProvider/AuthContext"; 

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center text-gray-500 text-lg">
                Loading...
            </div>
        );
    }

    if (!user) {
        
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

   
    return children;
};

export default ProtectedRoute;


