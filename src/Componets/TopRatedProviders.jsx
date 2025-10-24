import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MyContainer from "./MyContainer";

const TopRatedProviders = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        fetch("/skillData.json")
            .then((res) => res.json())
            .then((data) => {
                const sorted = data
                    .sort((a, b) => b.purchasedCount - a.purchasedCount)
                    .slice(0, 6);
                setProviders(sorted);
            })
            .catch((err) => console.error("Failed to load providers:", err));
    }, []);

    if (!providers.length)
        return (
            <div className="text-center py-10 text-gray-500">
                <span className="loading loading-dots loading-xl"></span>
            </div>
        );

    return (
        <section className="py-12 bg-white">
            <MyContainer className=" px-4">
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
                        disableOnInteraction: false,
                    }}
                    spaceBetween={25}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-8!"
                >
                    {providers.map((provider) => (
                        <SwiperSlide key={provider.skillId}>
                            <div className="bg-gray-50 hover:bg-[#fff5f3] transition-colors duration-300 p-5 rounded-xl shadow-md hover:shadow-xl flex gap-5 items-center border border-gray-100">
                                <img
                                    src={provider.providerImg}
                                    alt={provider.providerName}
                                    className="w-16 h-16 object-cover rounded-full border-2 border-[#f56942]"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {provider.providerName}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        <span className="font-semibold">Skill:</span>{" "}
                                        {provider.skillName}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        <span className="font-semibold">People Purchased:</span>{" "}
                                        {provider.purchasedCount} times
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </MyContainer>
        </section>
    );
};

export default TopRatedProviders;
