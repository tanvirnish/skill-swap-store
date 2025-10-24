import React, { useState } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../AuthProvider/AuthContext";

const ForgotPassword = () => {
    const { resetPassword } = useAuth();
    const location = useLocation();

    // Prefill email if passed from login
    const [email, setEmail] = useState(location.state?.email || "");

    const handleReset = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        try {
            await resetPassword(email);
            toast.success("Password reset email sent. Check your inbox.");

            // Open Gmail in a new tab (best-effort)
            window.open(`https://mail.google.com/mail/u/0/#search/${encodeURIComponent(email)}`, "_blank");
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleReset}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-4"
            >
                <h2 className="text-2xl font-bold text-center">Reset Password</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered w-full"
                    required
                />
                <button type="submit" className="btn btn-primary w-full">
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
