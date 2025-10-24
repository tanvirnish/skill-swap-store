// import React, { useEffect, useState } from "react";
// import { useAuth } from "../contexts/AuthContext";
// import { toast } from "react-hot-toast";
// import { useLocation } from "react-router-dom";

// const ForgotPassword = () => {
//     const { resetPassword } = useAuth();
//     const location = useLocation();
//     const prefilledEmail = location.state?.email || "";
//     const [email, setEmail] = useState(prefilledEmail);

//     const handleReset = async (e) => {
//         e.preventDefault();
//         try {
//             await resetPassword(email);
//             toast.success("Password reset email sent. Check your inbox.");
//             // open Gmail in a new tab (best-effort)
//             window.open(`https://mail.google.com/mail/u/0/#search/${encodeURIComponent(email)}`, "_blank");
//         } catch (err) {
//             toast.error(err.message);
//         }
//     };

//     return (
//         <form onSubmit={handleReset}>
//             <input value={email} onChange={(e) => setEmail(e.target.value)} />
//             <button type="submit">Reset</button>
//         </form>
//     );
// };
