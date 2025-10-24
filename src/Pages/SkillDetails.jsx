import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";

const SkillDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [skill, setSkill] = useState(null);

    useEffect(() => {
        fetch("/skillData.json")
            .then(r => r.json())
            .then(data => setSkill(data.find(s => s.skillId.toString() === id)));
    }, [id]);

    const handleBook = (e) => {
        e.preventDefault();
        toast.success("Thanks for your interest!");
        e.target.reset();
        navigate("/all-skills");
    };

    if (!skill) return <div className="text-center py-20"><span className="loading loading-dots loading-xl"></span></div>;

    return (
        <section className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col lg:flex-row gap-4 items-start mb-5">
                    <div className="relative w-full lg:w-1/2">
                        <img src={skill.image} alt={skill.skillName} className="w-full h-64 object-cover rounded-md" />
                        {skill.discount && (
                            <span className="absolute top-0 left-0 bg-[#f56942] text-white text-md font-bold px-2 py-1 rounded">
                                {skill.discount} OFF
                            </span>
                        )}
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold mb-2">{skill.skillName}</h1>
                        <p className="text-gray-700 mb-2 text-justify">{skill.description}</p>
                        <p className="text-gray-700 font-bold">Instructor: <span className="font-bold text-black">{skill.providerName}</span></p>
                        <p className="text-gray-700 font-bold">Instructor Email: <span className="font-bold text-black">{skill.providerEmail}</span></p>
                        <div className="flex flex-wrap gap-4 ">
                            <p className="text-gray-700 font-bold">Price: <span className="font-bold text-black">${skill.price}</span></p>
                            <p className="text-gray-700 font-bold">People Purchased: <span className="font-bold text-black">{skill.purchasedCount}</span></p>
                            <p className="text-gray-700 font-bold">Slots Available: <span className="font-bold text-black">{skill.slotsAvailable}</span></p>
                        </div>
                        <p className="text-yellow-500 mb-2 font-bold">Rating: {skill.rating}</p>
                    </div>
                </div>

                <form onSubmit={handleBook} className="flex flex-col gap-3">
                    <input name="name" placeholder="Name" className="input input-bordered w-full" required />
                    <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
                    <button type="submit" className="btn bg-[#f56942] text-white mt-2">Book Session</button>
                </form>
            </div>
        </section>
    );
};

export default SkillDetails;
