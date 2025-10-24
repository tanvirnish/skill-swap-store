import React, { useState } from 'react';
import MyContainer from '../Componets/MyContainer';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../FireBase/FireBase.config';
import { useNavigate } from 'react-router';
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";


const SignUp = () => {
    const [show,setShow ] =useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

        if(!regExp.test (password)){
            toast.error("Password must be 6 characters long, include uppercase, lowercase, number, and special character!")
            return
        }

       
        

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res);
                toast.success('Sign Up Successful');
                
                navigate('/');
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <MyContainer>
            <div className="hero bg-linear-to-r from-red-500 to-orange-500 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create Your Account!</h1>
                        <p className="py-6">Join Skill Swap and start learning or teaching new skills.</p>
                    </div>
                
                    <div className="card bg-white/5 backdrop-blur-md w-full max-w-sm shrink-0 rounded-2xl shadow-lg border border-white/10">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <fieldset className="fieldset flex flex-col gap-3">
                                    <label className="label text-white">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="input input-bordered w-full bg-transparent border-white/50 placeholder-white text-white focus:border-[#f56942] focus:ring focus:ring-[#f56942]/30"
                                        placeholder="Email"
                                        required
                                    />

                                    <div className=" relative">
                                    <label className="label text-white">Password</label>
                                        <input
                                            name="password"
                                            type={show ? "text" : "password"}
                                            className="input input-bordered w-full bg-transparent border-white/50 placeholder-white text-white focus:border-[#f56942] focus:ring focus:ring-[#f56942]/30"
                                            placeholder="Password"
                                            required
                                        />
                                        <span onClick={() => setShow(!show)} className=' text-2xl absolute right-3 top-7 text-white cursor-pointer z-50'>{show ? <BiShow /> : <BiHide />}</span>
                                    </div>
                                    <button type="submit" className="btn btn-neutral mt-4 w-full">
                                        Sign Up
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </MyContainer>
    );
};

export default SignUp;



