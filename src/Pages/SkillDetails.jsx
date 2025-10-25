import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import ratingImg from "../../src/assets/icon-ratings.png";

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
            <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg">
                <div className="flex flex-col lg:flex-row gap-4 items-center mb-5">
                    <div className="relative w-full  lg:w-1/2">
                        <img src={skill.image} alt={skill.skillName} className="w-full h-64 object-cover rounded-md shadow-2xl " />
                        {skill.discount && (
                            <span className="absolute top-0 left-0 bg-[#f56942] text-white text-md font-bold px-2 py-1 rounded">
                                {skill.discount} OFF
                            </span>
                        )}
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold mb-2">{skill.skillName}</h1>
                        <p className="text-gray-500 mb-2 text-justify">{skill.description}</p>
                        <p className="text-gray-500 font-bold">Instructor: <span className="font-bold text-gray-700">{skill.providerName}</span></p>
                        <p className="text-gray-500 font-bold">Instructor Email: <span className="font-bold text-gray-700">{skill.providerEmail}</span></p>
                        <div className="flex flex-wrap gap-4 ">
                            <p className="text-gray-500 font-bold">Price: <span className="font-bold text-gray-700">${skill.price}</span></p>
                            <p className="text-gray-500 font-bold">Enrolled: <span className="font-bold text-gray-700">{skill.purchasedCount}</span></p>
                            <p className="text-gray-500 font-bold">Slots Available: <span className="font-bold text-gray-700">{skill.slotsAvailable}</span></p>
                        </div>
                        <p className="text-yellow-500 mb-2 font-bold flex gap-2 items-center"><span><img className="h-4 w-4" src={ratingImg} alt="" /></span> {skill.rating}</p>
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
