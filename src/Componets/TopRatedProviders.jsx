import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TopRatedProviders = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        fetch("/skillData.json")
            .then((res) => res.json())
            .then((data) => setProviders(data))
            .catch((err) => console.error("Failed to load providers:", err));
    }, []);

    if (!providers.length)
        return <div className="text-center py-10 text-gray-500"><span className="loading loading-dots loading-xl"></span></div>;

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">
                    Top Rated Providers
                </h2>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    Meet our most trusted and highly rated instructors.
                </p>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        
                    }}
                    className="pb-8!" 
                >
                    {providers.slice(0, 6).map((provider) => (
                        <SwiperSlide key={provider.skillId}>
                            <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition flex gap-5 items-center">
                                <img
                                    src={provider.providerImg}
                                    alt={provider.providerName}
                                    className="w-14 h-14 object-cover rounded-full"
                                />
                                <div>
                                    <h3 className="text-md font-semibold">{provider.providerName}</h3>
                                    <p className="text-gray-600 text-sm">
                                        <span className="font-semibold">Provide Skill:</span>{" "}
                                        {provider.skillName}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        <span className="font-semibold">People purchased:</span>{" "}
                                        {provider.purchasedCount}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TopRatedProviders;


