import React, { useState } from "react";
import { useAuth } from "../AuthProvider/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
    const { user, updateUserProfile } = useAuth();
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile({ displayName: name, photoURL: photo });
            toast.success("Profile updated successfully!");
            setEditing(false);
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col items-center gap-4">
                <img
                    src={user?.photoURL || "https://via.placeholder.com/150"}
                    alt={user?.displayName || "User"}
                    className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-2xl font-bold">{user?.displayName || "No Name"}</h2>
                <p className="text-gray-600 font-bold">{user?.email}</p>

                {editing ? (
                    <form onSubmit={handleUpdate} className="flex flex-col gap-3 w-full mt-4">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered w-full "
                            placeholder="Name"
                            required
                        />
                        <input
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            className="input input-bordered w-full"
                            placeholder="Photo URL"
                        />
                        <div className="flex gap-2 mt-2">
                            <button type="submit" className="btn btn-primary flex-1">Save</button>
                            <button
                                type="button"
                                className="btn btn-outline flex-1"
                                onClick={() => setEditing(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <button
                        onClick={() => setEditing(true)}
                            className="btn bg-[#f56942] text-white mt-4"
                    >
                        Update Profile
                    </button>
                )}
            </div>
        </div>
    );
};

export default Profile;
