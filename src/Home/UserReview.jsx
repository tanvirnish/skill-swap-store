import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import ratingImg from "../../src/assets/icon-ratings.png";

const UserReviews = () => {
    const [reviews, setReviews] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        fetch("/userReview.json")
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.error("Failed to load reviews:", err));
    }, []);

    if (!reviews.length)
        return <div className="text-center py-10 text-gray-500"><span className="loading loading-dots loading-xl"></span></div>;

    return (
        <section className="py-10 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    What Our Learners Say
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Read feedback from our learners about how SkillSwap helped them grow.
                </p>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop
                    grabCursor
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center h-[300px] overflow-hidden"
                            >
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-16 h-16 object-cover rounded-full mb-4"
                                />
                                <h3 className="text-lg font-semibold">{review.name}</h3>
                                <p className="text-gray-500 text-sm mb-2">{review.skillLearned}</p>
                                <p className="text-gray-700 mb-3 overflow-hidden text-ellipsis">
                                    "{review.review}"
                                </p>
                                <div className="flex items-center gap-1 mt-auto">
                                    <img src={ratingImg} alt="rating" className="w-4 h-4" />
                                    <span className="font-bold text-yellow-500">{review.rating}</span>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default UserReviews;
