import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import ratingImg from "../../src/assets/icon-ratings.png";

const AllSkills = () => {
    const [skillsData, setSkillsData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/skillData.json")
            .then((res) => res.json())
            .then((data) => setSkillsData(data))
            .catch((err) => console.error("Failed to load skills data:", err));
    }, []);

    if (!skillsData.length)
        return (
            <div className="text-center py-20">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-[#f56942] rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-gray-500"><span className="loading loading-dots loading-xl"></span></p>
            </div>
        );

    const handleViewDetails = (skillId) => {
        navigate(`/skill/${skillId}`);
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    All Skills
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Browse all available skills that you can learn or trade.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skillsData.map((skill) => (
                        <motion.div
                            key={skill.skillId}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-lg shadow-xl p-4 hover:shadow-lg transition-shadow duration-300 overflow-hidden relative"
                        >
                            {/* 🔥 Discount badge (only if discount exists) */}
                            {skill.discount && (
                                <span className="absolute top-4 left-4 bg-[#f56942] text-white text-md font-semibold px-3 py-1 rounded-md shadow">
                                    {skill.discount} OFF
                                </span>
                            )}

                            <img
                                src={skill.image}
                                alt={skill.skillName}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{skill.skillName}</h3>
                            <p className="text-gray-600 mb-2">Price: ${skill.price}</p>
                            <p className="text-yellow-500 flex items-center gap-2 font-bold mb-4">
                                <img className="w-4 h-4" src={ratingImg} alt="rating" />{" "}
                                {skill.rating}
                            </p>
                            <button
                                className="btn bg-[#f56942] text-white w-full mt-2"
                                onClick={() => handleViewDetails(skill.skillId)}
                            >
                                View Details
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllSkills;
