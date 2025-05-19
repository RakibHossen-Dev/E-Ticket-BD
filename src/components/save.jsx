"use client";
import Image from 'next/image';
import { useState } from 'react';

const Save = () => {
    const [activeTab, setActiveTab] = useState('hotel');
    const [searchQuery, setSearchQuery] = useState('');

    const renderSearchForm = () => {
        switch (activeTab) {
            case 'hotel':
                return (
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                        {/* Destination */}
                        <div className="bg-white p-4 rounded-lg shadow col-span-3 md:col-span-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Destination</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="City, Hotel, or Area"
                            />
                        </div>

                        {/* Check In/Out - will appear as one combined column on md+ screens */}
                        <div className="bg-white p-4 rounded-lg shadow col-span-3 md:col-span-2 grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Check In</label>
                                <input
                                    type="date"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Check Out</label>
                                <input
                                    type="date"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Rooms & Guests */}
                        <div className="bg-white p-4 rounded-lg shadow col-span-3 md:col-span-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Rooms & Guests</label>
                            <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>1 Room, 2 Guests</option>
                                <option>1 Room, 1 Guest</option>
                                <option>2 Rooms, 4 Guests</option>
                            </select>
                        </div>
                    </div>
                );

            case 'bus':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <label className="block text-gray-700 text-sm font-bold mb-2">From</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Departure City"
                            />
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow">
                            <label className="block text-gray-700 text-sm font-bold mb-2">To</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Destination City"
                            />
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Journey Date</label>
                            <input
                                type="date"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                );

            case 'train':
                return (
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow col-span-3 md:col-span-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">From Station</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Departure Station"
                            />
                        </div>

                        <div className='bg-white p-4 rounded-lg shadow col-span-3 md:col-span-2 grid grid-cols-2 gap-4'>
                            <div className="">
                                <label className="block text-gray-700 text-sm font-bold mb-2">To Station</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Destination Station"
                                />
                            </div>

                            <div className="">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Journey Date</label>
                                <input
                                    type="date"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                        </div>

                        <div className="bg-white p-4 rounded-lg shadow col-span-3 md:col-span-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Class</label>
                            <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Any Class</option>
                                <option>AC</option>
                                <option>Non-AC</option>
                                <option>Shovon</option>
                            </select>
                        </div>
                    </div>
                );

            case 'ship':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <label className="block text-gray-700 text-sm font-bold mb-2">From Port</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Departure Port"
                            />
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow">
                            <label className="block text-gray-700 text-sm font-bold mb-2">To Port</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Destination Port"
                            />
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Journey Date</label>
                            <input
                                type="date"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="w-full relative overflow-hidden h-[600px]">
            {/* Background image can be added here */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/beach2.jpg"
                    alt='beach'
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    priority
                    quality={100}
                />
            </div>

            <div className=" flex flex-col justify-center items-center h-full  relative z-10">


                {/* Service Tabs */}
                <div className=" flex justify-center items-center gap-8 bg-white rounded-t-md shadow-md px-2 sm:px-10 py-5">
                    <button
                        onClick={() => setActiveTab('hotel')}
                        className={` font-medium rounded-t-lg ${activeTab === 'hotel' ? ' text-blue-700' : ' text-black '}`}>
                        Hotels
                    </button>
                    <button
                        onClick={() => setActiveTab('bus')}
                        className={` font-medium rounded-t-lg  ${activeTab === 'bus' ? ' text-blue-700' : 'text-black'}`}>
                        Bus
                    </button>
                    <button
                        onClick={() => setActiveTab('train')}
                        className={` font-medium rounded-t-lg  ${activeTab === 'train' ? ' text-blue-700' : 'text-black'}`}>
                        Train
                    </button>
                    <button
                        onClick={() => setActiveTab('ship')}
                        className={` font-medium rounded-t-lg ${activeTab === 'ship' ? ' text-blue-700' : 'text-black'}`}>
                        Ship
                    </button>
                </div>

                {/* Dynamic Search Form */}
                <div className="bg-white w-11/12 mx-auto bg-opacity-30 p-3 md:p-6  rounded-sm">
                    {renderSearchForm()}

                    <div className="mt-6 flex justify-center">
                        <button className="bg-[#fdcc02] hover:shadow-lg text-[#00026e] font-bold py-3 px-8 rounded-lg ">
                            Search {activeTab === 'hotel' ? 'Hotels' : activeTab === 'bus' ? 'Buses' : activeTab === 'train' ? 'Trains' : 'Ships'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;