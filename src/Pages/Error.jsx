import React from 'react';
import { useNavigate } from 'react-router';
import errorImg from "../assets/error.jpg";

const Error = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/"); 
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 gap-6">
            <img
                src={errorImg}
                alt="Error"
                className="w-full max-w-md rounded-lg shadow-md object-cover"
            />
            <h2 className="text-2xl font-bold text-gray-700">Oops! Page not found.</h2>
            <p className="text-gray-500 text-center max-w-sm">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <button
                className='btn bg-[#f56942] text-white px-6 py-2 rounded-md text-md'
                onClick={handleGoBack}
            >
                Go Back
            </button>
        </div>
    );
};

export default Error;
