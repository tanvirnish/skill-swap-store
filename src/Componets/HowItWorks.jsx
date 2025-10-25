import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaSearch, FaUsers, FaExchangeAlt, FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-toastify";

const iconMap = {
    user: <FaUser className="w-6 h-6 text-[#f56942]" />,
    search: <FaSearch className="w-6 h-6 text-[#f56942]" />,
    users: <FaUsers className="w-6 h-6 text-[#f56942]" />,
    exchange: <FaExchangeAlt className="w-6 h-6 text-[#f56942]" />,
    star: <FaStar className="w-6 h-6 text-[#f56942]" />,
};

const HowItWorks = () => {
    const [steps, setSteps] = useState([]);
    const [activeStep, setActiveStep] = useState(null);

    useEffect(() => {
        fetch("/howToWorks.json")
            .then((res) => res.json())
            .then((data) => setSteps(data))
            .catch((err) => toast.error("Failed to load steps:", err));
    }, []);

    const toggleStep = (id) => {
        setActiveStep(activeStep === id ? null : id);
    };

    if (!steps.length) return <div className="text-center py-10 text-gray-500">Loading...</div>;

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    How It Works
                </h2>

                <div className="flex flex-col gap-6">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative flex flex-col md:flex-row items-start md:items-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
                        >
                          
                            <div className="flex items-center flex-1 gap-4">
                                {iconMap[step.icon]}
                                <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
                            </div>

                          
                            <div
                                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                                onClick={() => toggleStep(step.id)}
                            >
                                {activeStep === step.id ? (
                                    <FaMinus className="w-5 h-5 text-[#f56942] transition-colors duration-300" />
                                ) : (
                                    <FaPlus className="w-5 h-5 text-gray-600 hover:text-[#f56942] transition-colors duration-300" />
                                )}
                            </div>

                           
                            <AnimatePresence>
                                {activeStep === step.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4 md:mt-0 md:ml-6 bg-gray-100 rounded-lg p-4 flex-1"
                                    >
                                        <p className="text-gray-700">{step.extra}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
