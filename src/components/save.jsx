"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdClose, MdDirectionsBus, MdTrain, MdDirectionsBoat, MdContacts } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Bus", icon: <MdDirectionsBus className="text-[24px]" /> },
    { name: "Hotel", icon: <RiHotelFill className="text-[24px]" /> },
    { name: "Train", icon: <MdTrain className="text-[24px]" /> },
    { name: "Ship", icon: <MdDirectionsBoat className="text-[24px]" /> },
    { name: "Contact", icon: <MdContacts className="text-[24px]" /> },
  ];

  return (
    <>
      <nav className="border-b sticky top-0 backdrop-blur-sm bg-white z-50">
        <div className="w-11/12 mx-auto flex justify-between items-center py-3">
          {/* logo section */}
          <div className="flex items-center gap-2">
            <Image
              src="/e-ticket.png"
              alt="ET-ticket BD logo"
              width={150}
              height={40}
              priority
            />
          </div>

          {/* Menu section for larger screens */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className=" text-gray-800">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium  text-gray-900">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth buttons and mobile menu */}
          <div className="flex items-center gap-4">
            {
              <>
                <button onClick={toggleDropdown} className="lg:flex items-center text-sm rounded-full hidden">
                  <img
                    referrerPolicy="no-referrer"
                    src=""
                    alt="User"
                    className="w-[42px] h-[42px] bg-green-500 rounded-full"
                  />
                </button>

                <button className='hidden md:block font-semibold rounded-md border-2 px-3 py-1 border-secondary hover:bg-secondary hover:text-white'>
                  Login
                </button>
              </>
            }
            {
              isDropdownOpen && (
                <div className="z-50 my-4 text-base list-none bg-white rounded-sm shadow w-44 absolute top-[58px] right-[64px]">
                  <div className="px-4 py-3">
                    <span className="block">Jahid Hasan</span>
                  </div>
                  <ul className="py-1">
                    <li className="block px-4 py-2 hover:bg-gray-100">Profile</li>
                    <li className="block px-4 py-2 hover:bg-gray-100">My Booking</li>
                    <li className="block px-4 py-2 hover:bg-gray-100">Saved</li>

                    <hr />
                    <li className="block w-full text-left px-4 py-2 hover:bg-gray-100"> Sign Out</li>
                  </ul>
                </div>
              )
            }

            {/* Mobile menu button - changes to close icon when sidebar is open */}
            <div className="lg:hidden" onClick={() => setOpen(!open)}>
              {open ? (
                <MdClose className="text-3xl text-gray-700" />
              ) : (
                <MdMenu className="text-3xl text-gray-700" />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3 }}
            className="fixed scroll-auto top-0 right-0 w-64 h-full bg-white border-l z-40 pt-16">
            <div className="w-full h-full p-6">
              <ul className="flex flex-col gap-10">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-6 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                    onClick={() => setOpen(false)}>
                    <span className="text-gray-800">{item.icon}</span>
                    <span className="text-gray-900 text-sm font-medium">{item.name}</span>
                  </li>
                ))}
                <li className="block p-2 text-gray-900 text-sm font-medium hover:bg-gray-100">Profile</li>
                <li className="block p-2 text-gray-900 text-sm font-medium hover:bg-gray-100">My Booking</li>
                <li className="block p-2 text-gray-900 text-sm font-medium hover:bg-gray-100">Saved</li>
              </ul>
              <div className="mt-8 flex flex-col gap-4">
                <button className="flex justify-center items-center  gap-2 w-full font-semibold rounded-md border-2 px-3 py-2 border-secondary hover:bg-secondary hover:text-white text-sm">
                  SignIn
                </button>
                <button className="flex justify-center items-center  gap-2 w-full font-semibold rounded-md border-2 px-3 py-2 border-secondary hover:bg-secondary hover:text-white text-sm">
                  SignUp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;