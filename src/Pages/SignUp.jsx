import { useState } from 'react';
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import MyContainer from '../Componets/MyContainer';
import { useAuth } from "../AuthProvider/AuthContext";

const SignUp = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const { signup } = useAuth();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // password validation
        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!regExp.test(password)) {
            toast.error("Password must be at least 6 characters, include uppercase, lowercase, and number!");
            return;
        }

        try {
            await signup(email, password);
            toast.success('Sign Up Successful');
            navigate('/');
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <MyContainer>
            <div className="hero bg-linear-to-r from-red-500 to-orange-500 min-h-screen flex items-center justify-center">
                <div className="card bg-white/5 backdrop-blur-md w-full max-w-sm shrink-0 rounded-2xl shadow-lg border border-white/10">
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className="flex flex-col gap-3">
                            <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full bg-transparent border-white/50 placeholder-white text-white focus:border-[#f56942] focus:ring focus:ring-[#f56942]/30"
                                required
                            />
                            <div className="relative">
                                <input
                                    name="password"
                                    type={show ? "text" : "password"}
                                    placeholder="Password"
                                    className="input input-bordered w-full bg-transparent border-white/50 placeholder-white text-white focus:border-[#f56942] focus:ring focus:ring-[#f56942]/30"
                                    required
                                />
                                <span onClick={() => setShow(!show)} className='absolute right-3 top-2 cursor-pointer text-white'>
                                    {show ? <BiHide /> : <BiShow />}
                                </span>
                            </div>
                            <button type="submit" className="btn btn-neutral mt-2 w-full">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </MyContainer>
    );
};

export default SignUp;
