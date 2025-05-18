import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdTouchApp } from 'react-icons/md';
import { SiAmazonpay } from 'react-icons/si';

const TicketBuyGuide = () => {
    return (
        <div className='my-10 px-4'>
            {/* Header */}
            <section className='flex flex-col items-center justify-center mb-10'>
                <p className='text-3xl md:text-4xl font-semibold text-center leading-snug'>
                    <span className='text-green-600'>Buy tickets</span> in 3 easy steps
                </p>
            </section>

            {/* Steps Container */}
            <section className='flex flex-col gap-8 md:flex-row md:justify-center md:items-start md:gap-12'>
                {/* Step 1: Search */}
                <div className='flex flex-col sm:flex-row items-center text-center sm:text-left max-w-md mx-auto'>
                    <div>
                        <FaSearch className='text-green-600 text-5xl sm:text-6xl mb-3 sm:mb-0' />
                    </div>
                    <div className='sm:ml-4'>
                        <h3 className='text-xl font-semibold'>Search</h3>
                        <p className='text-sm pt-2 text-gray-600'>
                            Choose your origin, destination, journey dates and search for buses
                        </p>
                    </div>
                </div>

                {/* Step 2: Select */}
                <div className='flex flex-col sm:flex-row items-center text-center sm:text-left max-w-md mx-auto'>
                    <div>
                        <MdTouchApp className='text-green-600 text-5xl sm:text-6xl mb-3 sm:mb-0' />
                    </div>
                    <div className='sm:ml-4'>
                        <h3 className='text-xl font-semibold'>Select</h3>
                        <p className='text-sm pt-2 text-gray-600'>
                            Select your desired trip and choose your seats
                        </p>
                    </div>
                </div>

                {/* Step 3: Pay */}
                <div className='flex flex-col sm:flex-row items-center text-center sm:text-left max-w-md mx-auto'>
                    <div>
                        <SiAmazonpay className='text-green-600 text-5xl sm:text-6xl mb-3 sm:mb-0' />
                    </div>
                    <div className='sm:ml-4'>
                        <h3 className='text-xl font-semibold'>Pay</h3>
                        <p className='text-sm pt-2 text-gray-600'>
                            Pay by bank cards or mobile banking
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TicketBuyGuide;
