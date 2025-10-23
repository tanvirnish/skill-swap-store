// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ratingImg from "../../src/assets/icon-ratings.png";

const PopularSkill = () => {
    const [skillsData, setSkillsData] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        fetch("/skillData.json")
            .then((res) => res.json())
            .then((data) => setSkillsData(data))
            .catch((err) => console.error("Failed to load skills data:", err));
    }, []);

    if (!skillsData.length)
        return <div className="text-center py-10 text-gray-500"><span className="loading loading-dots loading-xl"></span></div>;

    const prevSlide = () => swiperRef.current?.slidePrev();
    const nextSlide = () => swiperRef.current?.slideNext();

    return (
        <section className="py-12 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
                    Popular Skills
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Discover the most popular local skills you can learn or trade.
                </p>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    className="pb-8!"
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 25 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                        1280: { slidesPerView: 4, spaceBetween: 35 },
                    }}
                >
                    {skillsData.slice(0, 6).map((skill) => (
                        <SwiperSlide key={skill.skillId}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-lg shadow-xl p-2 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.skillName}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                                <div className="py-2">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {skill.skillName}
                                    </h3>
                                    <p className="text-gray-600 mb-2">Price: ${skill.price}</p>
                                    <p className="text-yellow-500 flex items-center gap-3 font-bold">
                                        <img className="w-4 h-4" src={ratingImg} alt="" /> {skill.rating}
                                    </p>
                                    <button className="btn bg-[#f56942] text-white w-full mt-2">
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

       
                <button
                    onClick={prevSlide}
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full z-10">
                    <FaArrowLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full z-10">
                    <FaArrowRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default PopularSkill;
