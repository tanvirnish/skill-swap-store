import React, { useState } from "react";
import { useAuth } from "../AuthProvider/AuthContext";
import { toast } from "react-toastify";
import { MdModeEditOutline } from "react-icons/md";

const Profile = () => {
    const { user, updateUserProfile } = useAuth();

    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [formData, setFormData] = useState({
        displayName: user?.displayName || "",
        email: user?.email || "",
        photoURL: user?.photoURL || "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile({
                displayName: formData.displayName,
                photoURL: formData.photoURL,
            });
            toast.success("Profile updated successfully!");
            setShowUpdateForm(false);
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
        
            <div className="relative bg-linear-to-r from-sky-100 to-slate-50">
                <div className="h-44 md:h-56 bg-[url('https://skitguys.com/media/images/video/_1200x630_crop_center-center_82_none/Nature_Walk_Welcome_Still_Shift-HD.jpeg?mtime=1593629440')] bg-center bg-cover"></div>

     
                <div className="absolute left-10 -bottom-16 md:left-20">
                    <div className="w-36 h-36 rounded-full ring-4 ring-[#f56942] shadow-lg overflow-hidden bg-white">
                        <img
                            src={user?.photoURL || "https://via.placeholder.com/150"}
                            alt="avatar"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>

            
            <div className="w-full px-4 sm:px-6 md:px-20 mt-20 md:mt-0">
                <div className="flex flex-col md:flex-row items-start gap-6 w-full">                
                    <div className="w-36 hidden md:block" />

                    <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 w-full">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-semibold">
                                    {user?.displayName || "No Name"}
                                </h1>
                                <p className="text-sm text-gray-600">{user?.email}</p>
                            </div>
                            <button
                                className="btn btn-outline mt-2 md:mt-0 flex gap-2"
                                onClick={() => setShowUpdateForm(!showUpdateForm)}
                            >
                                <span ><MdModeEditOutline /></span> Edit Profile
                            </button>
                        </div>

                     
                        {showUpdateForm && (
                            <form
                                onSubmit={handleUpdate}
                                className="mt-4 flex flex-col gap-2 bg-gray-200 p-4 rounded shadow-sm transition-all duration-300 w-full"
                            >
                                <input
                                    type="text"
                                    name="displayName"
                                    placeholder="Name"
                                    value={formData.displayName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                                <input
                                    type="text"
                                    name="photoURL"
                                    placeholder="Photo URL"
                                    value={formData.photoURL}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    className="input input-bordered w-full"
                                    disabled
                                />
                                <button type="submit" className="btn bg-[#f56942] text-white mt-1">
                                    Save
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <div className="h-10" />
        </div>
    );
};

export default Profile;
