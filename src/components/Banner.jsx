"use client";
import Image from 'next/image';
import { useState } from 'react';
import { MdDirectionsBus, MdTrain, MdDirectionsBoat, } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";

const Banner = () => {
    const [activeTab, setActiveTab] = useState('hotel');

    return (
        <div className="w-full relative overflow-hidden h-[600px]">
            {/* Background image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/beach2.jpg"
                    alt='beach'
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    priority
                    quality={100} />
            </div>

            <div className="flex flex-col justify-center items-center h-full relative z-10">
                {/* Tab Navigation */}
                <div className=" flex bg-white rounded-t-md px-2 md:px-6 py-1  ">
                    {/* Bus Tab */}
                    <button
                        onClick={() => setActiveTab('bus')}
                        className={`flex flex-col sm:flex-row items-center px-3 py-2 sm:px-6 sm:py-3 font-medium ${activeTab === 'bus'
                                ? ' border-b-2 border-[#fdcc02]'
                                : 'text-gray-600'
                            }`}>
                        <MdDirectionsBus className="w-6 h-6 mb-1 sm:mb-0 sm:mr-2" />
                        <span className={`text-sm sm:font-semibold ${activeTab === "bus" ? "text-[#00026e]" : ""}`}>Bus</span>
                    </button>

                    {/* Hotel Tab */}
                    <button
                        onClick={() => setActiveTab('hotel')}
                        className={`flex flex-col sm:flex-row items-center px-3 py-2 sm:px-6 sm:py-3 font-medium ${activeTab === 'hotel'
                                ? ' border-b-2 border-[#fdcc02]'
                                : 'text-gray-600'
                            }`}>
                        <RiHotelFill className="w-6 h-6 mb-1 sm:mb-0 sm:mr-2" />
                        <span className={`text-sm sm:font-semibold ${activeTab === "hotel" ? "text-[#00026e]" : ""}`}>Hotel</span>
                    </button>
                    
                    {/* Train Tab */}
                    <button
                        onClick={() => setActiveTab('train')}
                        className={`flex flex-col sm:flex-row items-center px-3 py-2 sm:px-6 sm:py-3 font-medium ${activeTab === 'train'
                                ? ' border-b-2 border-[#fdcc02]'
                                : 'text-gray-600'
                            }`}>
                        <MdTrain className="w-6 h-6 mb-1 sm:mb-0 sm:mr-2" />
                        <span className={`text-sm sm:font-semibold ${activeTab === "train" ? "text-[#00026e]" : ""}`}>Train</span>
                    </button>

                    {/* Ship Tab */}
                    <button
                        onClick={() => setActiveTab('ship')}
                        className={`flex flex-col sm:flex-row items-center px-3 py-2 sm:px-6 sm:py-3 font-medium ${activeTab === 'ship'
                                ? ' border-b-2 border-[#fdcc02]'
                                : 'text-gray-600'
                            }`}>
                        <MdDirectionsBoat className="w-6 h-6 mb-1 sm:mb-0 sm:mr-2" />
                        <span className={`text-sm sm:font-semibold ${activeTab === "ship" ? "text-[#00026e]" : ""}`}>Ship</span>
                    </button>
                </div>

                {/* Tab Content */}
                <div className="bg-white w-11/12 px-4 py-5 md:px-6 md:py-10 rounded-md">
                    {/* Hotel Tab */}
                    {activeTab === 'hotel' && (
                        <form className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                            <div className="bg-white p-2 md:p-4 rounded-md border col-span-3 md:col-span-1">
                                <label className="block font-semibold text-[#00026e] mb-1">Destination</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="City, Hotel or Area" />
                            </div>

                            <div className="bg-white p-2 md:p-4 rounded-md border col-span-3 md:col-span-2 grid grid-cols-2 gap-4">
                                <div className="">
                                    <label className="block font-semibold text-[#00026e] mb-1">Check-in</label>
                                    <input type="date" className="w-full p-2 border rounded" />
                                </div>

                                <div className="">
                                    <label className="block font-semibold text-[#00026e] mb-1">Check-out</label>
                                    <input type="date" className="w-full p-2 border rounded" />
                                </div>
                            </div>

                            <div className="bg-white p-2 md:p-4 rounded-md border col-span-3 md:col-span-1">
                                <label className="block font-semibold text-[#00026e] mb-1">Room & Guests</label>
                                <select className="w-full p-2 border rounded">
                                    <option>1 Room, 2 Guests</option>
                                    <option>1 Room, 1 Guests</option>
                                    <option>2 Rooms, 4 Guests</option>
                                </select>
                            </div>
                        </form>
                    )}

                    {/* Bus Tab */}
                    {activeTab === 'bus' && (
                        <form className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                            <div className="bg-white p-2 md:p-4 rounded-md border">
                                <label className="block font-semibold text-[#00026e] mb-1 ">From</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="Departure City" />
                            </div>

                            <div className="bg-white p-2 md:p-4 rounded-md border">
                                <label className="block font-semibold text-[#00026e] mb-1">To</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="Destination City" />
                            </div>

                            <div className="bg-white p-2 md:p-4 rounded-md border">
                                <label className="block font-semibold text-[#00026e] mb-1">Journey Date</label>
                                <input type="date" className="w-full p-2 border rounded" />
                            </div>
                        </form>
                    )}

                    {/* Train Tab */}
                    {activeTab === 'train' && (
                        <form className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                            <div className='bg-white p-2 md:p-4 rounded-md border col-span-3 md:col-span-2 grid grid-cols-2 gap-4'>
                                <div className="">
                                    <label className="block font-semibold text-[#00026e] mb-1">From Station</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border rounded"
                                        placeholder="Departure Station" />
                                </div>

                                <div className="">
                                    <label className="block font-semibold text-[#00026e] mb-1">To Station</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border rounded"
                                        placeholder="Destination Station" />
                                </div>
                            </div>

                            <div className="bg-white p-2 md:p-4 rounded-md border col-span-3 md:col-span-1">
                                <label className="block font-semibold mb-1 text-[#00026e]">Journey Date</label>
                                <input type="date" className="w-full p-2 border rounded" />
                            </div>

                            <div className="bg-white p-2 md:p-4 rounded-md border col-span-3 md:col-span-1">
                                <label className="block font-semibold mb-1 text-[#00026e]">Class</label>
                                <select className="w-full p-2 border rounded">
                                    <option>Any Class</option>
                                    <option>AC</option>
                                    <option>Non-AC</option>
                                    <option>Shovon</option>
                                </select>
                            </div>
                        </form>
                    )}

                    {/* Ship Tab */}
                    {activeTab === 'ship' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                            <div className="bg-white p-2 md:p-4 rounded-md border">
                                <label className="block font-semibold mb-1 text-[#00026e]">From Port</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="Departure Port" />
                            </div>

                            <div className="bg-white p-2 md:p-4 rounded-md border">
                                <label className="block font-semibold mb-1 text-[#00026e]">To Port</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="Destination Port" />
                            </div>

                            <div className="bg-white p-2 md:p-4 rounded-md border">
                                <label className="block font-semibold mb-1 text-[#00026e]">Journey Date</label>
                                <input type="date" className="w-full p-2 border rounded" />
                            </div>
                        </div>
                    )}

                    {/* Search Button */}
                    <div className="mt-6 text-center">
                        <button className="bg-[#fdcc02] hover:bg-yellow-500 text-[#00026e] font-bold py-3 px-8 rounded-md transition">
                            Search {activeTab === 'hotel' ? 'Hotels' :
                                activeTab === 'bus' ? 'Buses' :
                                    activeTab === 'train' ? 'Trains' : 'Ships'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;