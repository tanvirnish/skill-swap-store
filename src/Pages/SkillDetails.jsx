import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const SkillDetails = () => {
    const { id } = useParams();
    const [skill, setSkill] = useState(null);

    useEffect(() => {
        fetch("/skillData.json")
            .then(r => r.json())
            .then(data => setSkill(data.find(s => s.skillId.toString() === id)));
    }, [id]);

    const handleBook = (e) => {
        e.preventDefault();
        toast.success("Session booked successfully!");
        e.target.reset();
    };

    if (!skill) return <div className="text-center py-20">Loading...</div>;

    return (
        <section className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <img src={skill.image} alt={skill.skillName} className="w-full h-64 object-cover rounded-md mb-6" />
                <h1 className="text-3xl font-bold mb-2">{skill.skillName}</h1>
                <p className="text-gray-700 mb-2">{skill.description}</p>
                <p className="text-gray-600 mb-2">Provider: {skill.providerName}</p>
                <p className="text-gray-600 mb-2">Price: ${skill.price}</p>
                <p className="text-yellow-500 mb-2 font-bold">Rating: {skill.rating}</p>
                <p className="text-gray-600 mb-4">Slots Available: {skill.slotsAvailable}</p>

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
