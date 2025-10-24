import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../AuthProvider/AuthContext";
import { BiShow, BiHide } from "react-icons/bi";
import MyContainer from '../Componets/MyContainer';

const Login = () => {
    const { login, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            toast.success("Login Successful");
            navigate(from, { replace: true });
        } catch (err) {
            toast.error(err.message);
        }
    };

    const handleGoogle = async () => {
        try {
            await signInWithGoogle();
            toast.success("Login Successful");
            navigate(from, { replace: true });
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <MyContainer>
            <div className="hero bg-linear-to-r from-red-500 to-orange-500 min-h-screen flex items-center justify-center">
                <div className="card bg-white/5 backdrop-blur-md w-full max-w-sm shrink-0 rounded-2xl shadow-lg border border-white/10">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <h2 className="text-2xl font-bold text-center text-white">Login</h2>

                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                name="email"
                                className="input input-bordered w-full bg-transparent border-white/50 placeholder-white text-white focus:border-[#f56942] focus:ring focus:ring-[#f56942]/30"
                                required
                            />

                            <div className="relative">
                                <input
                                    type={show ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    name="password"
                                    className="input input-bordered w-full bg-transparent border-white/50 placeholder-white text-white focus:border-[#f56942] focus:ring focus:ring-[#f56942]/30"
                                    required
                                />
                                <span onClick={() => setShow(!show)} className='absolute right-3 top-2 cursor-pointer text-white text-xl'>
                                    {show ? <BiHide /> : <BiShow />}
                                </span>
                            </div>

                            <button type="submit" className="btn btn-neutral mt-2 w-full">
                                Login
                            </button>

                            
                            <button type="button" onClick={handleGoogle} className="btn bg-white/20 text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            

                            <p className="text-center text-sm text-white/80 mt-2">
                                Don't have an account? <Link to="/signup" className="text-blue-300 underline">Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </MyContainer>
    );
};

export default Login;



// import React, { useState } from "react";
// import { useNavigate, useLocation, Link } from "react-router";
// import { toast } from "react-toastify";
// import { useAuth } from "../AuthProvider/AuthContext";
// import { BiShow, BiHide } from "react-icons/bi";

// const Login = () => {
//     const { login, signInWithGoogle } = useAuth();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [show, setShow] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await login(email, password);
//             toast.success("Login Successful");
//             navigate(from, { replace: true });
//         } catch (err) {
//             toast.error(err.message);
//         }
//     };

//     const handleGoogle = async () => {
//         try {
//             await signInWithGoogle();
//             toast.success("Login Successful");
//             navigate(from, { replace: true });
//         } catch (err) {
//             toast.error(err.message);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-4">
//                 <h2 className="text-2xl font-bold text-center">Login</h2>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                     className="input input-bordered w-full"
//                     required
//                 />
//                 <div className="relative">
//                     <input
//                         type={show ? "text" : "password"}
//                         placeholder="Password"
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                         className="input input-bordered w-full"
//                         required
//                     />
//                     <span onClick={() => setShow(!show)} className="absolute right-3 top-2 cursor-pointer text-gray-500">
//                         {show ? <BiHide /> : <BiShow />}
//                     </span>
//                 </div>
//                 <button type="submit" className="btn btn-primary w-full">Login</button>
//                 <button type="button" onClick={handleGoogle} className="btn btn-outline w-full">
//                     Login with Google
//                 </button>
//                 <p className="text-center text-sm">
//                     Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Login;
