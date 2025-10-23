import React, { useEffect, useState } from "react";
import topProvidersData from "../../public/skillData.json";


const TopRatedProviders = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        setProviders(topProvidersData);
    }, []);

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">Top Rated Providers</h2>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    Meet our most trusted and highly rated instructors — loved by learners for their expertise, communication, and teaching style.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {providers.map((provider) => (
                        <div key={provider.id} className="bg-gray-50 p-2 rounded-lg shadow hover:shadow-lg transition flex gap-5 items-center">
                            <img
                                src={provider.providerImg}
                                alt={provider.name}
                                className="w-14 h-14 object-cover rounded-full "
                            />
                           <div className="">
                                <h3 className="text-md font-semibold  ">{provider.providerName}</h3>
                                <p className="text-gray-600 text-sm" ><span className="font-semibold">Provide Skill:</span>  {provider.skillName}</p>
                                <p className="text-gray-600 text-sm"><span className="font-semibold">people purchased:</span> {provider.purchasedCount}</p>
                                
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopRatedProviders;
