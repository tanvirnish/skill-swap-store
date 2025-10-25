import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthProvider/AuthContext';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import MyContainer from '../Componets/MyContainer';
import { Navigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Resources = () => {
    const { user, loading } = useAuth();
    const [resources, setResources] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        fetch('/resources.json')
            .then(res => res.json())
            .then(data => {
                setResources(data);
                setDataLoading(false);
            })
            .catch(err => {
                console.error('Failed to load resources:', err);
                setDataLoading(false);
            });
    }, []);

    if (loading || dataLoading) return (
        <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );

    if (!user) return <Navigate to="/login" replace />;

    const resourceItems = resources.filter(r => r.type !== "app");
    const appItems = resources.filter(r => r.appImg);

    const handleToast = (msg) => toast.info(msg, { position: "top-right", autoClose: 2000 });

    return (
        <MyContainer className='bg-[#F5F5DC]'>
       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {resourceItems.map(resource => (
                    <div key={resource.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <span className="absolute top-2 left-2 bg-[#f56942] text-white text-xs font-bold px-2 py-1 rounded z-10">
                            {resource.type.toUpperCase()}
                        </span>

                        <img src={resource.img} alt={resource.title} className="w-full h-48 object-cover" />

                        <div className="relative">
                            <div className="w-10 h-10  absolute left-4 -top-6 md:left-4 md:-top-6 rounded-full ring-2 ring-[#f56942] shadow-lg overflow-hidden bg-white">
                                <img src={resource["author-img"]} alt={resource.name} className="object-cover w-full h-full" />
                            </div>
                        </div>


                        <div className="p-4 pt-10 md:pt-6 text-center md:text-left">
                            <div className="flex items-center justify-between gap-2 mb-1">
                                <p className="flex gap-1 items-center text-md font-semibold">
                                    {resource.name} {resource.verified && <RiVerifiedBadgeFill className="text-blue-500" />}
                                </p>
                                <p className="text-gray-400 text-md">{resource.date}</p>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{resource.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                            <button
                                className='btn bg-[#b84e37] text-white  hover:bg-[#e04317ee] transition-colors'
                                onClick={() => handleToast(`Read More clicked for "${resource.title}"`)}
                            >
                                Read More...
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        
            {appItems.length > 0 && (
                <>
                    <h1 className="text-3xl font-bold text-center mt-16 mb-8 text-gray-800">Free Important Apps</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {appItems.map(app => (
                            <div key={app.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center gap-4 hover:shadow-2xl transition-shadow duration-300">
                                <img src={app.appImg} alt={app.appName} className="w-24 h-24 rounded-full object-cover" />
                                <div className="flex items-center gap-2">
                                    <p className="font-medium text-lg">{app.appName}</p>
                                    {app.verified && <RiVerifiedBadgeFill className="text-blue-500" />}
                                </div>
                                <button
                                    className="btn bg-[#f56942] text-white w-full hover:bg-[#e04f2d] transition-colors"
                                    onClick={() => handleToast(`Successfully Download "${app.appName}"`)}
                                >
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </MyContainer>
    );
};

export default Resources;
