import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import heroImage1 from "../../src/assets/heroslide/spoken.png";
import heroImage2 from "../../src/assets/heroslide/guiter.png";
import heroImage3 from "../../src/assets/heroslide/photograpy.png";
import heroImage4 from "../../src/assets/heroslide/yoga.png";
import heroImage5 from "../../src/assets/heroslide/webdev.png";
import MyContainer from "../Componets/MyContainer";
import { useNavigate } from "react-router";

const images = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];

const HeroBanner = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate(); 
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const handleGetStarted = () => {
        navigate("/all-skills");
    };

    return (
        <MyContainer className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-lg">
            <img
                src={images[index]}
                alt="Hero Slide"
                className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center items-start px-6 sm:px-10 md:px-18 text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg leading-tight">
                    <span className="text-[#f56942]">Teach</span> What You Know, <br />
                    <span className="text-[#f56942]">Learn</span> What You Love
                </h1>
                <p className="mt-3 text-base sm:text-lg md:text-xl max-w-md drop-shadow-md">
                    Explore local skills and trade your talents with passionate learners!
                </p>
                <button
                    onClick={handleGetStarted}
                    className="btn rounded-full bg-[#f56942] text-white border-none mt-5"
                >
                    Get Started
                </button>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full"
            >
                <FaArrowLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full"
            >
                <FaArrowRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-white scale-110" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </MyContainer>
    );
};

export default HeroBanner;
